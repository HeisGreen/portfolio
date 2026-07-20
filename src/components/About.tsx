import { motion } from 'framer-motion';
import { Smartphone, Server, Globe, Plug, MapPin, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

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

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeading
          kicker="About Me"
          title={<>Full-Stack Engineer &amp; <span className="gradient-text">Product Builder</span></>}
        />

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div variants={fadeUp}>
            <GlassCard spotlight={false} className="h-full p-8 md:p-10">
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  I'm a full-stack software engineer with a Biochemistry background from
                  Caleb University. I started in tech through the Google Developer Student
                  Club and have since built production systems across mobile, backend, and web.
                </p>
                <p>
                  I work end-to-end — React Native and Expo for mobile, Spring Boot and
                  Node.js for APIs, and Next.js for web platforms. Recent work includes
                  NaviaRide, a route-based carpooling app for Nigeria, and production sites
                  for Oakalley Group.
                </p>
                <p>
                  I'm constantly shipping, learning, and connecting with people building
                  real products.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-sm font-medium">
                  <MapPin size={16} className="text-[var(--color-accent)]" /> Lagos, Nigeria
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-sm font-medium">
                  <Briefcase size={16} className="text-[var(--color-emerald)]" /> Available for opportunities
                </span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-5">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <GlassCard className="group h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-3)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
