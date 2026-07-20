import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'NaviaRide Technologies Ltd',
    period: 'January 2026 – Present',
    description:
      "Built and maintained a scalable Spring Boot backend powering trip management, wallets, KYC, notifications, and payment services. Integrated Google Maps, live location tracking, and route-based matching. Led development of NaviaRide's React Native (Expo) app for iOS and Android — 50+ screens covering passenger booking, driver route management, trip-in-progress maps, earnings, and profile/settings. Managed mobile releases using Expo EAS Build, TestFlight, Google Play testing, and production deployment pipelines.",
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Oakalley Group',
    period: 'October 2025 – July 2026',
    description:
      'Designed and built three production web properties for a Nigeria-based business group: a Next.js financial brokerage platform, a business consulting marketing site, and a global auto-import consultancy site. Implemented backend API routes and server-side form handling with transactional email delivery. Architected Oakalley Capital Solutions in Next.js 16, React 19, TypeScript, and Tailwind CSS with multi-step loan application flows and document uploads. Managed end-to-end deployment: domain setup via Namecheap, DNS/SSL, Vercel frontend CI/CD, and backend services on Render.',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Nevalar Technologies',
    period: 'April 2025 – October 2025',
    description:
      'Collaborated with a team of four to develop a secure escrow backend using Node.js, TypeScript, Express, and MongoDB, increasing user engagement by 30%. Built a high-performance backend with Redis caching, reducing response times by 20%. Containerized and deployed the application using Docker, improving deployment efficiency by 50%.',
  },
  {
    title: 'Software Engineering Intern (Java)',
    company: 'New Horizons Learning Institute',
    period: 'January 2025 – December 2025',
    description:
      'Designed the backend of a banking application using Spring Boot with authentication and authorization mechanisms. Stored and managed user data (account details, balances, transaction history) securely in MySQL. Gained hands-on experience with API development, database integration, and application deployment.',
  },
  {
    title: 'Google Developer Student Club Backend Lead',
    company: 'Caleb University',
    period: 'April 2022 – August 2024',
    description:
      'Led the development and maintenance of backend systems, including server-side applications and databases. Gathered, defined, and analyzed customer requirements to build clear project plans and product functionality. Supported development, QA, and frontend teams during weekly code review meetings. Collaborated across the software development lifecycle, from requirement gathering to production releases.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Mactavis Digitals',
    period: 'May 2022 – May 2023',
    description:
      'Designed and launched a responsive sign-in and sign-up interface using React and CSS, boosting user retention by 18%. Engineered a high-performance search functionality using MongoDB and Node.js, reducing data retrieval time by 50%. Implemented Stripe API integration with Node.js and Express for secure payment processing for 500+ clients.',
  },
];

const education = [
  {
    title: 'Bachelor of Science in Biochemistry',
    company: 'Caleb University',
    period: 'August 2024',
    description:
      'GPA: 4.38/5.0. Relevant coursework: Bioinformatics, Molecular Biology, Biochemistry, Genetics, Computer Applications, Statistics, Research Methodology, Data Analysis.',
  },
];

const certifications: Array<{ name: string; issuer: string; year: string }> = [];

function Timeline({
  items,
}: {
  items: { title: string; company: string; period: string; description: string }[];
}) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* line */}
      <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--aurora-1)] via-[var(--aurora-3)] to-transparent" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div key={index} variants={fadeUp} className="relative">
            {/* node */}
            <span className="absolute -left-8 md:-left-10 top-6 flex h-4 w-4 items-center justify-center">
              <span className="absolute h-4 w-4 rounded-full bg-[var(--color-accent)]/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_2px_var(--color-accent-glow)]" />
            </span>
            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div>
                  <h4 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                    {item.title}
                  </h4>
                  <p className="text-[var(--color-accent)] font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] font-mono whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TimelineGroup({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={staggerContainer} className="mb-12">
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-4)]">
          <Icon className="text-white" size={22} />
        </div>
        <h3 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">{label}</h3>
      </motion.div>
      {children}
    </motion.div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <SectionHeading
          kicker="Career"
          title={<>My <span className="gradient-text">Resume</span></>}
        />

        <motion.div variants={fadeUp} className="flex justify-center mb-16">
          <a href="/Chidozie-Green-CV.pdf" download className="btn-primary">
            <Download size={20} /> Download PDF
          </a>
        </motion.div>

        <TimelineGroup icon={Briefcase} label="Experience">
          <Timeline items={experiences} />
        </TimelineGroup>

        <TimelineGroup icon={GraduationCap} label="Education">
          <Timeline items={education} />
        </TimelineGroup>

        {certifications.length > 0 && (
          <TimelineGroup icon={Award} label="Certifications">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <GlassCard className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)]">{cert.name}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-[var(--color-text-muted)] font-mono">{cert.year}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </TimelineGroup>
        )}
      </motion.div>
    </section>
  );
}
