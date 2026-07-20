import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { posts } from '../content/posts';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { staggerContainer, fadeUp } from '../lib/motion';

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeading
          kicker="Writing"
          title={<>From the <span className="gradient-text">Blog</span></>}
          subtitle="Thoughts and lessons from building real products across mobile, backend, and web."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <motion.article key={post.slug} variants={fadeUp} className="h-full">
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <GlassCard className="group h-full p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[var(--aurora-1)]/20 to-[var(--aurora-4)]/20 text-[var(--color-accent)] font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <Calendar size={13} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] mb-6 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5 font-mono">
                      <BookOpen size={13} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all text-sm font-medium">
                      Read more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
