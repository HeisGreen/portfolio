import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) ?? {};
  const { name, email, message, company } = body as {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };

  // Honeypot: real users never fill this hidden field.
  if (company && company.trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again shortly.' });
  }

  const trimmedName = (name ?? '').trim();
  const trimmedEmail = (email ?? '').trim();
  const trimmedMessage = (message ?? '').trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ ok: false, error: 'All fields are required.' });
  }
  if (trimmedName.length > 100) {
    return res.status(400).json({ ok: false, error: 'Name is too long.' });
  }
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }
  if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
    return res.status(400).json({ ok: false, error: 'Message must be between 10 and 5000 characters.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL ?? 'greenchidozie@gmail.com',
      replyTo: trimmedEmail,
      subject: `Portfolio message from ${trimmedName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again.' });
  }
}
