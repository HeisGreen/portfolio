import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-emerald)] rounded-full blur-[150px] opacity-15" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyNzI3MmEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48Y2lyY2xlIGZpbGw9IiMzZjNmNDYiIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] mb-6"
          >
            <span className="w-2 h-2 bg-[var(--color-emerald-light)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Chidozie</span>
            <br />
            <span className="text-[var(--color-text-secondary)]">
              Backend Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Backend engineer who loves building things. I focus on scalable APIs, 
            clean architecture, and using AI to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[var(--color-accent-glow)]"
            >
              View My Work
            </a>
            <a
              href="/Chidozie_Hamilton_Green_Resume.pdf"
              target="_blank"
              className="px-8 py-3.5 border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-primary)] rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: 'https://github.com/HeisGreen', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chidozie-green-510220233', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/heis_green', label: 'Twitter' },
              { icon: Mail, href: 'mailto:chidogreen2003@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-colors"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-accent)] opacity-30 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Main image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--color-bg-tertiary)] animate-pulse-glow">
              <img
                src="/chido.jpg"
                alt="Chidozie Hamilton Green"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/20 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-1/4 px-4 py-2 rounded-lg glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Java & Spring Boot</span>
            </motion.div>
            
            <motion.div
              className="absolute -left-4 bottom-1/4 px-4 py-2 rounded-lg glass"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <span className="text-sm font-medium">🇳🇬 Nigeria</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs">Scroll down</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}

