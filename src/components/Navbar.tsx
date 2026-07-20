import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume' },
  { name: 'Blog', id: 'blog' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled ? 'glass py-2.5 shadow-[var(--glass-shadow)]' : 'py-3'
        }`}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/#home" className="font-display text-2xl font-bold tracking-tight">
            <span className="gradient-text">Chido</span>
            <span className="text-[var(--color-emerald-light)]">.</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = onHome && active === link.id;
            return (
              <Link
                key={link.name}
                to={`/#${link.id}`}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/#contact" className="btn-primary !px-5 !py-2.5 text-sm">
              Let's Talk
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-text-primary)] p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass absolute top-full mt-2 left-4 right-4 rounded-2xl overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={`/#${link.id}`}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors py-2.5 px-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-border)]">
                <ThemeToggle />
                <Link
                  to="/#contact"
                  className="btn-primary !px-5 !py-2.5 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
