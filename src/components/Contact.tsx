import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:chidogreen2003@gmail.com',
      text: 'chidogreen2003@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/HeisGreen',
      text: 'github.com/HeisGreen',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chidozie-green-510220233',
      text: 'linkedin.com/in/chidozie-green',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/heis_green',
      text: '@heis_green',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-4" />
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[var(--color-text-primary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[var(--color-accent-glow)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <>Message Sent! ✓</>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
                Let's Connect
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-emerald)] group-hover:scale-110 transition-transform">
                      <social.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text-primary)]">{social.label}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{social.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-emerald)]/10 border border-[var(--color-accent)]/20 flex items-center gap-3">
                <MapPin className="text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">Location</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Nigeria</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-emerald)]/10 border border-[var(--color-accent)]/20">
              <p className="text-[var(--color-text-secondary)] text-sm">
                <strong className="text-[var(--color-text-primary)]">Note:</strong> This contact form is a placeholder. 
                For a production site, you'll want to integrate with a service like EmailJS, Formspree, or your own backend API.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
