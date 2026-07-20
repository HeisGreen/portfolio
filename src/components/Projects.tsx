import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Download, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  apk?: string;
  image: string | null;
}

const projects: Project[] = [
  {
    title: 'NaviaRide',
    description:
      'Route-based peer-to-peer carpooling for Nigeria. Designed and shipped the full product stack, React Native mobile app (iOS/Android), Spring Boot API, and Next.js admin/marketing site — covering bookings, live GPS tracking, driver KYC, wallet & payouts, VoIP calls, and emergency trip sharing.',
    tech: [
      'React Native', 'Expo', 'TypeScript', 'Spring Boot', 'Java', 'Next.js',
      'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'Paystack', 'Google Maps', 'Agora', 'Firebase',
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
    tech: ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'MySQL', 'JWT', 'REST API'],
    github: 'https://github.com/HeisGreen/health-app.git',
    demo: 'http://health-app-ivory-one.vercel.app/',
    image: '/healthlandingpage.png',
  },
  {
    title: 'Oakalley Consulting',
    description:
      'Business development and management consulting marketing site for a Nigeria-based business group. Built with Next.js, TypeScript, and Tailwind CSS — covering service pages, BuildRun, solutions, and investment advisory with server-side contact handling.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: '#',
    demo: 'https://oakalley-consulting.vercel.app',
    image: '/oakalley-consulting.png',
  },
  {
    title: 'Oakalley Capital',
    description:
      'Financial brokerage platform with multi-step loan application flows (salary-backed and collateral), document uploads, and structured pages for investment advisory. Built in Next.js 16, React 19, TypeScript, and Tailwind CSS with API routes and transactional email.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Render'],
    github: '#',
    demo: 'https://oakalley.vercel.app',
    image: '/oakalley-capital.png',
  },
  {
    title: 'Oakalley Autos',
    description:
      'Global auto-import consultancy site for sourcing and importing vehicles from China, the US, UK, Germany, and Canada. Features service pages, import routes, and a contact workflow with server-side form handling and email delivery.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: '#',
    demo: 'https://oakalley-autos.vercel.app',
    image: '/oakalley-autos.png',
  },
  {
    title: 'Bank Application (Backend)',
    description:
      'A scalable banking backend built with Java and Spring Boot for secure transactions. Features JWT-based authentication, role-based access control (RBAC), and persistent storage of accounts, balances, and transaction records, with CI/CD via GitHub Actions.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'RBAC', 'Spring Data JPA', 'MySQL', 'GitHub Actions'],
    github: 'https://github.com/HeisGreen',
    image: null,
  },
  {
    title: 'Online Examination System',
    description:
      'An online exam platform using Java and MySQL for backend data management with a JavaFX frontend. Designed a relational schema for exams, user profiles, and questions, using JDBC for secure connections and optimized queries for fast retrieval during exams.',
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    github: 'https://github.com/HeisGreen',
    image: null,
  },
  {
    title: 'Customer Management System',
    description:
      'A robust customer management backend built with Spring Boot and Spring Web. Uses Spring Data JPA for efficient data access against a PostgreSQL database running in Docker for a consistent environment, with continuous integration tests for smooth updates.',
    tech: ['Spring Boot', 'Spring Web', 'Spring Data JPA', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/HeisGreen',
    image: null,
  },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4">
      {project.github !== '#' && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
        >
          <Github size={18} /> <span>Code</span>
        </a>
      )}
      {project.demo && project.demo !== '#' && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
        >
          <ExternalLink size={18} /> <span>Live Demo</span>
        </a>
      )}
      {project.apk && (
        <a
          href={project.apk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
        >
          <Download size={18} /> <span>Download APK</span>
        </a>
      )}
    </div>
  );
}

function TechChips({ tech, max }: { tech: string[]; max?: number }) {
  const shown = max ? tech.slice(0, max) : tech;
  const extra = max ? tech.length - max : 0;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] font-mono"
        >
          {t}
        </span>
      ))}
      {extra > 0 && (
        <span className="px-2.5 py-1 text-xs rounded-md text-[var(--color-accent)] font-mono">
          +{extra} more
        </span>
      )}
    </div>
  );
}

function ImageBox({ project, className = '' }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <div className={`overflow-hidden bg-[var(--color-bg-tertiary)] ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background:
          'linear-gradient(135deg, color-mix(in srgb, var(--aurora-1) 22%, transparent), color-mix(in srgb, var(--aurora-4) 22%, transparent))',
      }}
    >
      <Code2 className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" size={44} />
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeading
          kicker="Selected Work"
          title={<>My <span className="gradient-text">Projects</span></>}
          subtitle="Production apps, client sites, and side projects."
        />

        {/* Featured */}
        <motion.div variants={fadeUp} className="mb-8">
          <GlassCard className="group grid lg:grid-cols-2 gap-0">
            <ImageBox project={featured} className="h-64 lg:h-full min-h-[20rem]" />
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="kicker mb-3">Flagship Product</span>
              <h3 className="font-display text-3xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {featured.description}
              </p>
              <div className="mb-6">
                <TechChips tech={featured.tech} max={8} />
              </div>
              <ProjectLinks project={featured} />
            </div>
          </GlassCard>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <GlassCard className="group h-full flex flex-col">
                <ImageBox project={project} className="h-44" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="mb-4 mt-auto">
                    <TechChips tech={project.tech} max={5} />
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-14 text-center">
          <p className="text-[var(--color-text-secondary)] mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/HeisGreen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={20} /> View All on GitHub <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
