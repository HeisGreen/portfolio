import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2, Download } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'NaviaRide',
      description:
        'Route-based peer-to-peer carpooling for Nigeria. Designed and shipped the full product stack, React Native mobile app (iOS/Android), Spring Boot API, and Next.js admin/marketing site — covering bookings, live GPS tracking, driver KYC, wallet & payouts, VoIP calls, and emergency trip sharing.',
      tech: [
        'React Native',
        'Expo',
        'TypeScript',
        'Spring Boot',
        'Java',
        'Next.js',
        'PostgreSQL',
        'Redis',
        'WebSockets',
        'Docker',
        'Paystack',
        'Google Maps',
        'Agora',
        'Firebase',
      ],
      github: '#',
      demo: 'https://naviaride.space',
      apk: 'https://drive.google.com/file/d/1WR-IPogsRU31gJuNvmbdkdUDBHaUUbFe/view?usp=drivesdk',
      image: '/naviaride-landing.png',
    },
    {
      title: 'HealthTrack',
      description:
        'A health and fitness application that helps users track workouts, manage exercise routines, and monitor progress over time. Built with a focus on clean backend architecture and scalable REST API design.',
      tech: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'React',
        'TypeScript',
        'MySQL',
        'JWT',
        'REST API',
      ],
      github: 'https://github.com/HeisGreen/health-app.git',
      demo: 'http://health-app-ivory-one.vercel.app/',
      image: '/healthlandingpage.png',
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
                <div className="flex flex-wrap gap-4">
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
                  {'apk' in project && project.apk && (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                    >
                      <Download size={18} />
                      <span>Download APK</span>
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
