import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, Loader2, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:greenchidozie@gmail.com', text: 'greenchidozie@gmail.com' },
  { icon: Phone, label: 'Phone', href: 'tel:+2349043249861', text: '+234 904 324 9861' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/HeisGreen', text: 'github.com/HeisGreen' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chidozie-green-510220233', text: 'linkedin.com/in/chidozie-green' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/heis_green', text: '@heis_green' },
];

const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[color-mix(in_srgb,var(--color-accent)_60%,transparent)] focus:ring-2 focus:ring-[var(--color-accent-glow)] transition-all';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeading
          kicker="Contact"
          title={<>Get In <span className="gradient-text">Touch</span></>}
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div variants={fadeUp}>
            <GlassCard spotlight={false} className="p-8 md:p-10 h-full">
              <h3 className="font-display text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: status === 'idle' || status === 'error' ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Check size={20} /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </motion.button>

                {status === 'error' && (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                )}
                {status === 'success' && (
                  <p className="text-sm text-[var(--color-emerald-light)]" role="status">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlassCard spotlight={false} className="p-8 md:p-10 h-full">
              <h3 className="font-display text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
                Let's Connect
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>

              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_50%,transparent)] transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-4)] group-hover:scale-110 transition-transform">
                      <social.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text-primary)]">{social.label}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{social.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 gradient-border p-[1px]">
                <div className="rounded-[calc(var(--radius)-1px)] bg-[var(--color-bg-secondary)]/60 backdrop-blur-xl p-4 flex items-center gap-3">
                  <MapPin className="text-[var(--color-accent)]" size={20} />
                  <div>
                    <p className="font-medium text-[var(--color-text-primary)]">Location</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
