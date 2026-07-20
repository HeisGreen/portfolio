import { useReducedMotion } from 'framer-motion';

/**
 * Fixed, full-page animated aurora canvas rendered once behind all content.
 * Layered glowing blobs + a subtle dotted grid overlay.
 */
export default function AuroraBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

      {/* aurora blobs */}
      <div
        className={`absolute -top-1/4 -left-1/4 w-[55vw] h-[55vw] rounded-full blur-[130px] opacity-40 ${
          reduce ? '' : 'animate-aurora-drift'
        }`}
        style={{ background: 'var(--aurora-1)' }}
      />
      <div
        className={`absolute top-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-30 ${
          reduce ? '' : 'animate-aurora-drift'
        }`}
        style={{ background: 'var(--aurora-2)', animationDelay: '-6s' }}
      />
      <div
        className={`absolute -bottom-1/4 left-1/4 w-[45vw] h-[45vw] rounded-full blur-[130px] opacity-25 ${
          reduce ? '' : 'animate-aurora-drift'
        }`}
        style={{ background: 'var(--aurora-3)', animationDelay: '-12s' }}
      />
      <div
        className={`absolute top-1/4 left-1/3 w-[38vw] h-[38vw] rounded-full blur-[150px] opacity-20 ${
          reduce ? '' : 'animate-aurora-drift'
        }`}
        style={{ background: 'var(--aurora-4)', animationDelay: '-9s' }}
      />

      {/* dotted grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.5]" />

      {/* vignette to keep contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]" />
    </div>
  );
}
