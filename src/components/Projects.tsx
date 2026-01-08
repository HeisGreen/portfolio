import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'HealthTrack',
      description: 'A health and fitness application that helps users track workouts, manage exercise routines, and monitor progress over time. Built with a focus on clean backend architecture and scalable REST API design.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'MySQL', 'JWT', 'REST API'],
      github: 'https://github.com/HeisGreen/health-app.git',
      demo: 'http://health-app-ivory-one.vercel.app/',
      image: '/healthlandingpage.png',
    },
    {
      title: 'More Projects Coming Soon',
      description: 'I\'m constantly working on new projects. Check back soon to see more of my work!',
      tech: ['Various'],
      github: '#',
      demo: '#',
      image: null,
    },
  ];

  return (
    <section
      id="projects"
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-4" />
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A collection of projects I've built. More coming soon!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)] transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              {project.image ? (
                <div className="h-48 overflow-hidden bg-[var(--color-bg-tertiary)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-emerald)]/20 flex items-center justify-center">
                  <Code2 className="text-[var(--color-text-muted)]" size={48} />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--color-text-secondary)] mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/HeisGreen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[var(--color-accent-glow)]"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
