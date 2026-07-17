import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Frameworks & Mobile',
      skills: ['Spring Boot', 'React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Databases & DevOps',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'Render', 'Vercel', 'Railway', 'EAS'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'APIs & Integrations',
      skills: ['Google Maps', 'Paystack', 'Agora', 'QoreID', 'Firebase', 'WebSockets', 'Sentry'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id="skills"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-4" />
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to build amazing products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium text-sm hover:border-[var(--color-accent)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-emerald)]/10 border border-[var(--color-accent)]/20"
        >
          <h3 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
            What I'm Learning & Exploring
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Diving deeper into system design, mobile release pipelines with EAS and TestFlight,
            and production deployment workflows across Vercel, Render, and Railway.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
