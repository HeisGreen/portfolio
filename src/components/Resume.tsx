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
      title: 'Software Engineer',
      company: 'NaviaRide Technologies Ltd',
      period: 'January 2026 – Present',
      description:
        'Built and maintained a scalable Spring Boot backend powering trip management, wallets, KYC, notifications, and payment services. Integrated Google Maps, live location tracking, and route-based matching. Led development of NaviaRide\'s React Native (Expo) app for iOS and Android — 50+ screens covering passenger booking, driver route management, trip-in-progress maps, earnings, and profile/settings. Managed mobile releases using Expo EAS Build, TestFlight, Google Play testing, and production deployment pipelines.',
      icon: Briefcase,
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Oakalley Group',
      period: 'October 2025 – July 2026',
      description:
        'Designed and built three production web properties for a Nigeria-based business group: a Next.js financial brokerage platform, a business consulting marketing site, and a global auto-import consultancy site. Implemented backend API routes and server-side form handling with transactional email delivery. Architected Oakalley Capital Solutions in Next.js 16, React 19, TypeScript, and Tailwind CSS with multi-step loan application flows and document uploads. Managed end-to-end deployment: domain setup via Namecheap, DNS/SSL, Vercel frontend CI/CD, and backend services on Render.',
      icon: Briefcase,
    },
    {
      title: 'Software Engineering Intern',
      company: 'Nevalar Technologies',
      period: 'April 2025 – October 2025',
      description:
        'Collaborated with a team of four to develop a secure escrow backend using Node.js, TypeScript, Express, and MongoDB, increasing user engagement by 30%. Built a high-performance backend with Redis caching, reducing response times by 20%. Containerized and deployed the application using Docker, improving deployment efficiency by 50%.',
      icon: Briefcase,
    },
    {
      title: 'Software Engineering Intern (Java)',
      company: 'New Horizons Learning Institute',
      period: 'January 2025 – December 2025',
      description:
        'Designed the backend of a banking application using Spring Boot with authentication and authorization mechanisms. Stored and managed user data (account details, balances, transaction history) securely in MySQL. Gained hands-on experience with API development, database integration, and application deployment.',
      icon: Briefcase,
    },
    {
      title: 'Google Developer Student Club Backend Lead',
      company: 'Caleb University',
      period: 'April 2022 – August 2024',
      description:
        'Led the development and maintenance of backend systems, including server-side applications and databases. Gathered, defined, and analyzed customer requirements to build clear project plans and product functionality. Supported development, QA, and frontend teams during weekly code review meetings. Collaborated across the software development lifecycle, from requirement gathering to production releases.',
      icon: Briefcase,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Mactavis Digitals',
      period: 'May 2022 – May 2023',
      description:
        'Designed and launched a responsive sign-in and sign-up interface using React and CSS, boosting user retention by 18%. Engineered a high-performance search functionality using MongoDB and Node.js, reducing data retrieval time by 50%. Implemented Stripe API integration with Node.js and Express for secure payment processing for 500+ clients.',
      icon: Briefcase,
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Biochemistry',
      institution: 'Caleb University',
      period: 'August 2024',
      description:
        'GPA: 4.38/5.0. Relevant coursework: Bioinformatics, Molecular Biology, Biochemistry, Genetics, Computer Applications, Statistics, Research Methodology, Data Analysis.',
      icon: GraduationCap,
    },
  ];

  const certifications: Array<{
    name: string;
    issuer: string;
    year: string;
    icon: typeof Award;
  }> = [];

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
