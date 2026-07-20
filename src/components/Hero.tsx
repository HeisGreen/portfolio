import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown, Mail, Download, Sparkles } from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn } from '../lib/motion';

const socials = [
  { icon: Github, href: 'https://github.com/HeisGreen', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chidozie-green-510220233', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/heis_green', label: 'Twitter' },
  { icon: Mail, href: 'mailto:greenchidozie@gmail.com', label: 'Email' },
];

const stats = [
  { value: '9+', label: 'Products shipped' },
  { value: '6', label: 'Roles & internships' },
  { value: '4.38', label: 'GPA / 5.0' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative z-10"
      >
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-emerald-light)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-emerald)]" />
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-6"
          >
            Hi, I'm <span className="gradient-text">Chidozie</span>
            <br />
            <span className="text-[var(--color-text-secondary)]">Full-Stack Engineer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[var(--color-text-secondary)] mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I build mobile apps, backend APIs, and web platforms end-to-end — from
            NaviaRide to production Next.js sites, with React Native, Spring Boot, and
            real products people actually use.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-9"
          >
            <a href="#projects" className="btn-primary">
              <Sparkles size={18} />
              View My Work
            </a>
            <a href="/Chidozie-Green-CV.pdf" target="_blank" className="btn-ghost">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-3 justify-center lg:justify-start mb-10"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center lg:justify-start gap-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div variants={scaleIn} className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className={`absolute -inset-6 rounded-full border border-dashed border-[var(--color-accent)] opacity-30 ${
                reduce ? '' : 'animate-spin-slow'
              }`}
            />
            <div
              className="absolute -inset-10 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  'conic-gradient(from 0deg, var(--aurora-1), var(--aurora-2), var(--aurora-3), var(--aurora-4), var(--aurora-1))',
              }}
            />

            <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-[var(--glass-border)] animate-pulse-glow">
              <img
                src="/chido.jpg"
                alt="Chidozie Hamilton Green"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--aurora-1)]/25 to-transparent" />
            </div>

            <motion.div
              className="absolute -right-4 top-[18%] px-4 py-2.5 rounded-xl glass text-sm font-medium"
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={reduce ? undefined : { duration: 4, repeat: Infinity }}
            >
              React Native &amp; Spring Boot
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-[18%] px-4 py-2.5 rounded-xl glass text-sm font-medium"
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={reduce ? undefined : { duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              🇳🇬 Lagos, Nigeria
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={reduce ? undefined : { duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
