export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'naviaride-real-time-trip-tracking',
    title: "Building NaviaRide's Real-Time Trip Tracking",
    date: 'February 2026',
    readTime: '11 min read',
    category: 'Mobile & Backend',
    excerpt:
      'How I built live trip tracking for NaviaRide with React Native, a Spring Boot backend, WebSockets, and the Google Maps platform — from route matching to shipping via Expo EAS.',
    content: `Real-time location is the heart of any ride product. For [NaviaRide](https://www.naviaride.space) — a route-based carpooling platform for Nigeria — riders and drivers need to see each other move on the map with as little delay as possible, without draining batteries or blowing through mobile data budgets that, in this market, people actually count.

I built NaviaRide end-to-end: the React Native app, the Spring Boot API, and the real-time layer that stitches them together. This post is a fairly detailed walk through how the live trip-tracking system actually works — the parts that were fun, the parts that bit me, and the trade-offs I'd defend in a code review.

## The problem, framed honestly

On paper, "show a moving dot on a map" sounds trivial. In practice, a ride product has to answer a surprising number of questions at once:

- Where is the driver *right now*, and how stale is that answer?
- What happens when a phone goes through a tunnel, or Android decides to kill the app to save battery?
- How do you avoid paying for a Google Maps API call every single time a marker nudges forward?
- How do you keep the rider's map smooth at 60fps while coordinates arrive irregularly over a flaky mobile network?

Every one of those is a systems problem, not a UI problem. The map is just the surface.

## The architecture at a glance

The stack splits cleanly across three layers:

- **Mobile:** a React Native (Expo) app for iOS and Android, using the Google Maps SDK for rendering and \`expo-location\` for GPS.
- **Backend:** a Spring Boot API that owns trips, wallets, KYC, payouts, and notifications.
- **Real-time:** a WebSocket layer (STOMP over SockJS) that fans driver positions out to subscribed riders, backed by Redis for pub/sub across instances.

The driver app is the single source of truth for position. It streams coordinates up to the backend, the backend persists a lightweight trail and republishes each update to the riders subscribed to that specific trip. Redis sits in the middle so that horizontal scaling doesn't fracture a trip across nodes.

\`\`\`
Driver app  ──WS──▶  Spring Boot (node A)  ──▶  Redis pub/sub  ──▶  Spring Boot (node B)  ──WS──▶  Rider app
\`\`\`

## Streaming location from the driver

On the driver side, the trick is sending *enough* updates to feel live without turning the phone into a hand warmer. I used a foreground location task with a distance filter, then throttled on top of it so we never emit faster than the network can reasonably carry:

\`\`\`ts
import * as Location from 'expo-location';

const MIN_INTERVAL_MS = 3000;
let lastSentAt = 0;

async function startBroadcasting(tripId: string, socket: TripSocket) {
  await Location.requestForegroundPermissionsAsync();

  return Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 15, // metres
      timeInterval: MIN_INTERVAL_MS,
    },
    ({ coords }) => {
      const now = Date.now();
      if (now - lastSentAt < MIN_INTERVAL_MS) return;
      lastSentAt = now;

      socket.send('/app/trip.position', {
        tripId,
        lat: coords.latitude,
        lng: coords.longitude,
        heading: coords.heading ?? null,
        speed: coords.speed ?? null,
        capturedAt: now,
      });
    },
  );
}
\`\`\`

Two decisions mattered here. First, \`distanceInterval\` means a driver stuck at a red light stops flooding us with identical points. Second, \`capturedAt\` travels with the payload so the rider can reason about staleness instead of blindly trusting arrival time.

## Fanning out on the backend

On the backend I used Spring's WebSocket support with a STOMP broker. Riders subscribe to a per-trip topic; the driver publishes to an application destination. The controller validates that the sender actually owns the trip before it rebroadcasts — you never trust a socket message just because it arrived.

\`\`\`java
@Controller
public class TripPositionController {

    private final SimpMessagingTemplate broker;
    private final TripService trips;

    public TripPositionController(SimpMessagingTemplate broker, TripService trips) {
        this.broker = broker;
        this.trips = trips;
    }

    @MessageMapping("/trip.position")
    public void onPosition(@Payload PositionUpdate update, Principal principal) {
        Trip trip = trips.requireActive(update.tripId());
        if (!trip.isDriver(principal.getName())) {
            throw new AccessDeniedException("Only the trip driver may broadcast position");
        }

        trips.appendTrail(trip.getId(), update); // lightweight, async
        broker.convertAndSend("/topic/trip." + trip.getId(), update);
    }
}
\`\`\`

Because we run more than one backend instance, the STOMP broker relay is backed by Redis. A driver connected to node A and a rider connected to node B still share the same trip topic — Redis carries the message across. That single decision is what let the real-time layer scale sideways without sticky sessions.

## Route-based matching (the part that's actually different)

This is where NaviaRide diverges from on-demand ride-hailing. We don't match "nearest available driver." We match people travelling the **same fixed daily route** at roughly the **same time**. Think commuters, not taxis.

I modeled a route as an ordered sequence of stops with a departure window. Matching a rider to a trip becomes a question of route overlap plus time compatibility:

\`\`\`ts
type Stop = { id: string; order: number };

function isCompatible(
  riderStops: Stop[],
  tripStops: Stop[],
  riderDeparture: number,
  tripDeparture: number,
): boolean {
  const tripOrder = new Map(tripStops.map((s) => [s.id, s.order]));
  const onRoute = riderStops.filter((s) => tripOrder.has(s.id));

  // rider must travel in the same direction as the trip
  const inOrder = onRoute.every((s, i, arr) =>
    i === 0 ? true : tripOrder.get(s.id)! > tripOrder.get(arr[i - 1].id)!,
  );

  const withinWindow = Math.abs(riderDeparture - tripDeparture) <= 30 * 60 * 1000;
  return onRoute.length >= 2 && inOrder && withinWindow;
}
\`\`\`

Framing matching this way removed a whole category of complexity. There's no bidding, no surge, no frantic search for the closest car — just "these two people are already going the same way, so let's put them in the same vehicle."

## Keeping tracking smooth and cheap

A handful of small things added up to a live-feeling map that didn't melt phones or budgets:

- **Client-side throttling** so we never emit faster than roughly every three seconds.
- **Topic-scoped broadcasting** — a rider only receives updates for the trip they're actually on, never every trip in the system.
- **Marker interpolation** on the rider app, animating between received points so the car glides instead of teleporting.
- **REST polling fallback** — if the socket drops, the app degrades gracefully to \`GET /trips/{id}/position\` on a timer until it reconnects.

That last point matters more than it sounds. Nigerian mobile networks drop connections constantly. A live tracker that *breaks* on a dropped socket is worse than one that quietly falls back and recovers.

## Handling the messy realities

Some defensive choices earned their keep:

1. **Staleness badges.** If \`capturedAt\` is older than ~15 seconds, the rider sees a subtle "updating…" state instead of a confidently wrong position.
2. **Idempotent trail writes.** Duplicate points (from reconnects) are deduped by \`capturedAt\`, so the persisted trail stays clean.
3. **Backpressure.** When a client falls behind, we drop intermediate points rather than queueing them — for live location, the newest point is the only one that matters.

## Shipping it

Releases went out through **Expo EAS Build**, into TestFlight and Google Play internal testing tracks. Being able to cut a real signed build and hand it to testers in minutes — without babysitting native toolchains — kept the iteration loop tight. Over-the-air updates via EAS Update let me push JS-only fixes without a full store review.

\`\`\`bash
# cut a production Android build
eas build --platform android --profile production

# ship a JS-only hotfix to users already on that build
eas update --branch production --message "Fix marker interpolation jitter"
\`\`\`

## Lessons learned

- **Push the source of truth to the edge.** Letting the driver device own position (with the server as fan-out) kept latency low and logic simple.
- **Design for the network you have, not the one you wish you had.** The polling fallback and staleness handling were not gold-plating — on real networks they *were* the feature.
- **Model the domain, not the demo.** Route-based matching looked harder up front but deleted enormous complexity compared to on-demand matching.
- **Cheap wins compound.** Throttling, topic scoping, and interpolation each seemed minor; together they were the difference between "live" and "laggy."

## Conclusion

Building this top to bottom — mobile, backend, and the real-time seam between them — was the most rewarding part of NaviaRide. Every layer had to agree on the same picture of where a trip actually is, and getting that agreement to hold up over flaky networks, across scaled-out backend nodes, and inside a battery budget is the real engineering. The moving dot is easy. Making it *true* is the work.`,
  },
  {
    slug: 'shipping-production-nextjs-sites-oakalley',
    title: 'Shipping Production Next.js Sites for Oakalley',
    date: 'January 2026',
    readTime: '10 min read',
    category: 'Web',
    excerpt:
      'Lessons from building three production web properties for a business group in Next.js 16 — API routes, transactional email, and end-to-end deployment with DNS and SSL.',
    content: `At Oakalley Group I designed and built three production web properties back to back: a financial brokerage platform, a business consulting marketing site, and a global auto-import consultancy site. On the surface they're "just websites." In reality, shipping three real properties for a real business — with real leads, real domains, and real money on the line — taught me more about production web engineering than any tutorial project ever could.

This is a write-up of how I approached them, the shared foundation I built so I wasn't reinventing the wheel three times, and the deployment pipeline that turned a folder of components into live domains with valid certificates.

## The brief, and the trap I avoided

The easy version of this job is three static marketing sites: pretty pages, a contact form that opens the user's email client, done. That's also the version that quietly loses the business money, because a \`mailto:\` link is not a lead-capture system. It depends on the visitor having a configured mail app, it silently fails on mobile, and it leaves no record anywhere.

So the real goal became: **every form submission is a tracked, validated, server-handled event that reliably lands in someone's inbox.** That single requirement is what turned this from web design into full-stack work.

## A shared foundation

All three sites share the same core stack — **Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion** — with the flagship brokerage platform on **Next.js 16 and React 19**. Rather than copy-paste, I standardized the pieces that repeat across any serious site:

- A typed API-route pattern for form handling
- A single validation layer shared between client and server
- A transactional email sender with a consistent template
- Environment-based configuration so the same code is safe in dev, preview, and production

Validation lived in one place using \`zod\`, so the browser and the server agreed on exactly what a valid submission looks like:

\`\`\`ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7).optional(),
  message: z.string().min(10, 'Tell us a little more'),
});

export type ContactInput = z.infer<typeof contactSchema>;
\`\`\`

Sharing the schema meant the client could show inline errors instantly, and the server could re-validate the *same way* without trusting the client at all. Defense in depth, with zero duplicated rules.

## Real API routes, not mailto:

Here's the shape of a contact route in the App Router. It validates, sends a transactional email, and returns structured success/error states the UI can react to:

\`\`\`ts
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, phone, message } = parsed.data;

  try {
    await resend.emails.send({
      from: 'Oakalley <leads@oakalley.example>',
      to: process.env.LEADS_INBOX!,
      replyTo: email,
      subject: \`New enquiry from \${name}\`,
      text: \`\${message}\\n\\nPhone: \${phone ?? 'n/a'}\`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Could not send right now. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
\`\`\`

On the client, the form consumes those states so the user always knows what happened — pending, success, or a specific field error — instead of staring at a link that may or may not have done anything.

## Oakalley Capital: the heavy one

The brokerage platform was the largest build by far. Beyond the shared foundation it needed:

1. **Multi-step loan application flows** — both salary-backed and collateral-backed, each with its own field set and rules.
2. **Document uploads** for supporting paperwork, with type and size checks before anything hit storage.
3. **Structured investment-advisory pages** with reusable content sections.
4. **A component library** of buttons, inputs, steppers, and cards so the whole site stayed visually consistent.

The multi-step form was the most interesting UI problem. I kept the wizard state in one place and only let the user advance when the current step validated, so partial, broken applications never reached the server:

\`\`\`tsx
const steps = ['applicant', 'employment', 'documents', 'review'] as const;
type Step = (typeof steps)[number];

function useLoanWizard() {
  const [index, setIndex] = useState(0);
  const step: Step = steps[index];

  const next = (isValid: boolean) => {
    if (isValid && index < steps.length - 1) setIndex((i) => i + 1);
  };
  const back = () => setIndex((i) => Math.max(0, i - 1));

  return { step, index, next, back, total: steps.length };
}
\`\`\`

Framer Motion handled the transitions between steps, which made a fairly bureaucratic process feel smooth and intentional rather than like a stack of forms.

## Owning the whole pipeline

The part that made this feel genuinely full-stack was owning the path all the way to a live, secure domain. For each property I:

- Registered the domain via **Namecheap**
- Configured **DNS records** (A/CNAME) to point at the host
- Provisioned and verified **SSL certificates**
- Deployed the frontend to **Vercel** with Git-based CI/CD, so every push to \`main\` shipped and every PR got a preview URL
- Hosted supporting backend/API services on **Render**

Vercel's preview deployments quietly became one of my favorite tools — being able to send a stakeholder a real, working URL for a branch before it merged killed an entire class of "can you screenshot it?" conversations.

## Lessons learned

- **Do the boring backend work.** The difference between a portfolio site and a business asset is whether a lead actually reaches a human. API routes plus transactional email were the whole game.
- **Share your validation.** One \`zod\` schema for client and server removed drift and duplicated bugs.
- **Standardize once, ship three times.** Building a reusable form/email/config foundation up front made the second and third sites dramatically faster.
- **Own deployment.** Understanding DNS, SSL, and CI/CD end-to-end meant I could debug a broken domain instead of filing a ticket and waiting.

## Conclusion

Three sites, one foundation, and a real pipeline from component to certificate. The visible output was a set of polished marketing sites; the actual work was everything behind the submit button. Owning that full path — from a Tailwind component to a live domain serving over HTTPS with leads landing reliably in an inbox — is what makes "full-stack" stop being a résumé word and start being something you can point at.`,
  },
  {
    slug: 'designing-a-secure-escrow-backend',
    title: 'Designing a Secure Escrow Backend',
    date: 'August 2025',
    readTime: '5 min read',
    category: 'Backend',
    excerpt:
      'Building a secure escrow backend with Node.js, Express, and MongoDB — plus Redis caching and Docker — and the performance wins that came out of it.',
    content: `Escrow is all about trust: money is held until both sides are satisfied. Working with a team of four, I helped build a secure escrow backend that made those guarantees explicit in code.

## The stack

- **Node.js + TypeScript + Express** for the API
- **MongoDB** for persistence
- **Redis** for caching hot reads
- **Docker** for consistent, portable deployments

## What moved the needle

Three changes had the biggest impact:

1. **Redis caching** cut response times by around 20% by keeping frequently read data out of the database hot path.
2. **A cleaner API surface** improved engagement by roughly 30% — clearer contracts meant fewer round-trips and less confusion on the client.
3. **Containerizing with Docker** improved deployment efficiency by about 50%, since every environment ran the same image.

## Takeaways

Security-sensitive systems reward boring, predictable design: validate everything, cache deliberately, and make deployments reproducible. The performance wins were a bonus that came naturally from tightening the fundamentals.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
