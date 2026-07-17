import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { getPostBySlug } from '../content/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[var(--color-bg-primary)]">
        <h1 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">Post not found</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The article you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white rounded-xl font-medium transition-all"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 bg-[var(--color-bg-primary)]">
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
          className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-emerald)]/10 border border-[var(--color-accent)]/20"
        >
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-emerald)]/20 text-[var(--color-accent)] font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={14} />
              {post.readTime}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert max-w-none prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-li:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text-primary)] prose-a:text-[var(--color-accent)] prose-code:text-[var(--color-accent)]"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </motion.div>
      </div>
    </article>
  );
}
