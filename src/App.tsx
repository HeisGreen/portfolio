import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost';

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

function App() {
  return (
    <div className="min-h-screen">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © {new Date().getFullYear()} Chidozie Green. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}

export default App;
