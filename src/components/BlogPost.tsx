import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { getPostBySlug } from '../content/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
          Post not found
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The article you're looking for doesn't exist or has moved.
        </p>
        <Link to="/#blog" className="btn-primary">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-6">
      {/* reading progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-3)] to-[var(--aurora-4)]"
      />

      <div className="max-w-3xl mx-auto">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card mb-12 p-8 md:p-10"
        >
          <span className="kicker mb-4 inline-block">{post.category}</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-[1.05] text-[var(--color-text-primary)]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} />
              {post.readTime}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-li:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text-primary)] prose-a:text-[var(--color-accent)] prose-code:text-[var(--color-accent)] prose-code:font-mono prose-pre:bg-[var(--color-bg-tertiary)] prose-pre:border prose-pre:border-[var(--color-border)]"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </motion.div>
      </div>
    </article>
  );
}
