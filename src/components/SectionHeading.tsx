import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col ${alignment} mb-14`}
    >
      {kicker && (
        <span className="kicker mb-4 inline-flex items-center gap-2">
          <span className="h-px w-6 bg-[var(--color-accent)]" />
          {kicker}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-3)] to-[var(--aurora-4)] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-[var(--color-text-secondary)] text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
