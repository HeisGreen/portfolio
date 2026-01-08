import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Zap, Brain } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable backend solutions',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Structuring efficient and optimized database schemas',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building high-performance APIs and systems',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging AI to automate workflows and solve problems',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
              Backend Engineer & Problem Solver
            </h3>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I'm a backend-focused software developer with a strong interest in building scalable systems and real products that people actually use. I started out exploring tech alongside a science background, and over time I leaned fully into software development.
              </p>
              <p>
                I enjoy working with Java and Spring Boot, designing APIs, structuring databases, and thinking through system design. Lately, I've been exploring how AI can be used to automate workflows and improve everyday products.
              </p>
              <p>
                I'm constantly learning, building side projects, and connecting with people who are also creating and experimenting.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-secondary)]">📍</span>
                <span className="ml-2 text-[var(--color-text-primary)] font-medium">Nigeria</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-secondary)]">💼</span>
                <span className="ml-2 text-[var(--color-text-primary)] font-medium">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-emerald)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                  {feature.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
