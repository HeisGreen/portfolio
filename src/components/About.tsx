import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Server, Globe, Plug } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'React Native and Expo apps for iOS and Android with real-time features',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Spring Boot and Node.js APIs, databases, and scalable architecture',
    },
    {
      icon: Globe,
      title: 'Web Platforms',
      description: 'Next.js and TypeScript sites deployed to production with CI/CD',
    },
    {
      icon: Plug,
      title: 'Integrations',
      description: 'Paystack, Google Maps, VoIP, KYC, and real-time WebSocket services',
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
              Full-Stack Engineer & Product Builder
            </h3>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I'm a full-stack software engineer with a Biochemistry background from Caleb University. I started in tech through the Google Developer Student Club and have since built production systems across mobile, backend, and web.
              </p>
              <p>
                I work end-to-end — React Native and Expo for mobile, Spring Boot and Node.js for APIs, and Next.js for web platforms. Recent work includes NaviaRide, a route-based carpooling app for Nigeria, and production sites for Oakalley Group.
              </p>
              <p>
                I'm constantly shipping, learning, and connecting with people building real products.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-secondary)]">📍</span>
                <span className="ml-2 text-[var(--color-text-primary)] font-medium">Lagos, Nigeria</span>
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
