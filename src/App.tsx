import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost';
import AuroraBackground from './components/AuroraBackground';
import ScrollProgress from './components/ScrollProgress';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
    </>
  );
}

const socials = [
  { icon: Github, href: 'https://github.com/HeisGreen', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chidozie-green-510220233', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/heis_green', label: 'Twitter' },
  { icon: Mail, href: 'mailto:greenchidozie@gmail.com', label: 'Email' },
];

function Footer() {
  return (
    <footer className="relative mt-10 border-t border-[var(--color-border)] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/#home" className="font-display text-2xl font-bold tracking-tight">
          <span className="gradient-text">Chido</span>
          <span className="text-[var(--color-emerald-light)]">.</span>
        </Link>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2.5 rounded-xl glass text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center">
        <p className="text-[var(--color-text-muted)] text-sm">
          © {new Date().getFullYear()} Chidozie Green — designed &amp; built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
