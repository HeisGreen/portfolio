import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full-Stack Engineer',
      company: 'NaviaRide',
      period: 'January 2026 – Present',
      description:
        'NaviaRide is a route-based peer-to-peer carpooling platform for Nigeria, connecting drivers and commuters on fixed daily routes. Built the mobile app, backend API, and admin web platform end-to-end — including real-time trip tracking, Paystack payments, KYC verification, in-app voice calling, and safety features.',
      icon: Briefcase,
    },
  ];

  const education = [
    {
      degree: 'Your Degree',
      institution: 'Your University',
      period: '2019 - 2023',
      description: 'Relevant coursework and achievements.',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      name: 'Your Certification',
      issuer: 'Issuing Organization',
      year: '2023',
      icon: Award,
    },
  ];

  return (
    <section
      id="resume"
      ref={ref}
      className="min-h-screen py-20 px-6 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-6" />
          <motion.a
            href="/Chidozie-Green-CV.pdf"
            download
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[var(--color-accent-glow)]"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-emerald)]">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-text-primary)]">
                      {exp.title}
                    </h4>
                    <p className="text-[var(--color-accent)] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">{exp.period}</span>
                </div>
                <p className="text-[var(--color-text-secondary)]">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-emerald)]">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-text-primary)]">
                      {edu.degree}
                    </h4>
                    <p className="text-[var(--color-accent)] font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">{edu.period}</span>
                </div>
                <p className="text-[var(--color-text-secondary)]">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-emerald)]">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)]">{cert.name}</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
