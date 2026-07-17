import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { posts } from '../content/posts';

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = posts;

  return (
    <section
      id="blog"
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
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-emerald)] mx-auto mb-4" />
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Thoughts and lessons from building real products across mobile, backend, and web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)] transition-all"
            >
              <Link to={`/blog/${post.slug}`} className="block p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-emerald)]/20 text-[var(--color-accent)] font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                    <BookOpen size={14} />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all text-sm font-medium">
                    Read more
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

