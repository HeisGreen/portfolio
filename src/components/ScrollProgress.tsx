import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin aurora progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-3)] to-[var(--aurora-4)]"
    />
  );
}
