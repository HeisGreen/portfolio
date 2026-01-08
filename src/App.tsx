import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © {new Date().getFullYear()} Chidozie Hamilton Green. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
