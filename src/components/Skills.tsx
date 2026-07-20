import { motion } from 'framer-motion';
import { Code2, Layers, Database, Plug } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Mobile',
    icon: Layers,
    skills: ['Spring Boot', 'React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Databases & DevOps',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'Render', 'Vercel', 'Railway', 'EAS'],
  },
  {
    category: 'APIs & Integrations',
    icon: Plug,
    skills: ['Google Maps', 'Paystack', 'Agora', 'QoreID', 'Firebase', 'WebSockets', 'Sentry'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeading
          kicker="Toolkit"
          title={<>My <span className="gradient-text">Skills</span></>}
          subtitle="Technologies and tools I use to design, build, and ship real products."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={fadeUp}>
              <GlassCard className="h-full p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-4)] flex items-center justify-center">
                    <category.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -3 }}
                      className="px-3.5 py-1.5 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[color-mix(in_srgb,var(--color-accent)_50%,transparent)] font-mono text-sm transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-6">
          <div className="gradient-border p-[1px]">
            <div className="rounded-[calc(var(--radius)-1px)] bg-[var(--color-bg-secondary)]/60 backdrop-blur-xl p-8">
              <h3 className="font-display text-xl font-bold mb-3 text-[var(--color-text-primary)]">
                What I'm Learning &amp; Exploring
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Diving deeper into system design, mobile release pipelines with EAS and
                TestFlight, and production deployment workflows across Vercel, Render, and Railway.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
