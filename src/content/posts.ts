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
    readTime: '7 min read',
    category: 'Mobile & Backend',
    excerpt:
      'How I built live trip tracking for NaviaRide with React Native, a Spring Boot backend, WebSockets, and the Google Maps platform — from route matching to shipping via Expo EAS.',
    content: `Real-time location is the heart of any ride product. For [NaviaRide](https://www.naviaride.space) — a route-based carpooling platform for Nigeria — riders and drivers need to see each other move on the map with as little delay as possible, without draining batteries or budgets.

## The architecture

The stack is split across three layers:

- **Mobile:** React Native (Expo) app for iOS and Android
- **Backend:** Spring Boot API for trips, wallets, KYC, and notifications
- **Real-time:** WebSockets for live position updates, with the Google Maps SDK rendering routes

The driver app streams GPS coordinates to the backend, which fans them out to the relevant riders subscribed to that trip.

## Route-based matching

Unlike on-demand ride hailing, NaviaRide matches people on **fixed daily routes**. That means matching is less about "nearest driver" and more about "who is going my way, at my time." I modeled routes as ordered stop sequences and matched riders by overlap and departure window.

## Keeping it efficient

A few things kept tracking smooth:

- Throttling location updates on the client to a sensible interval
- Only broadcasting to sockets subscribed to a given trip
- Falling back to REST polling when a socket drops

## Shipping it

Releases went out through **Expo EAS Build**, TestFlight, and Google Play testing tracks, which made it easy to get real builds into testers' hands quickly.

Building this end-to-end — mobile, backend, and real-time — was the most rewarding part: every layer had to agree on the same picture of where a trip actually is.`,
  },
  {
    slug: 'shipping-production-nextjs-sites-oakalley',
    title: 'Shipping Production Next.js Sites for Oakalley',
    date: 'January 2026',
    readTime: '6 min read',
    category: 'Web',
    excerpt:
      'Lessons from building three production web properties for a business group in Next.js 16 — API routes, transactional email, and end-to-end deployment with DNS and SSL.',
    content: `At Oakalley Group I designed and built three production web properties: a financial brokerage platform, a business consulting marketing site, and a global auto-import consultancy site.

## Beyond the marketing site

The interesting work wasn't the pages — it was replacing client-only \`mailto:\` submissions with real backend handling:

- **API routes** for contact, loan, and import workflows
- **Server-side validation** with proper success and error states
- **Transactional email** delivery so nothing gets lost
- **Environment-based config** so the same code runs safely across environments

## Oakalley Capital Solutions

The brokerage platform was the largest build: **Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion**, with reusable UI components, multi-step loan application flows (salary and collateral), document uploads, and structured pages for investment advisory.

## Owning deployment

I handled the full path to production:

- Registered domains via Namecheap
- Configured DNS and SSL
- Deployed the frontend to Vercel with Git-based CI/CD
- Hosted backend and API services on Render

Owning the whole pipeline — from a component to a live domain with a valid certificate — is what makes "full-stack" feel real.`,
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
