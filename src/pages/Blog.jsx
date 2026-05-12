import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="animated-blob absolute left-[6%] top-10 h-60 w-60 rounded-full opacity-50" />
        <div className="container-premium relative text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal">
            Blog / Vlog
          </p>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight text-navy md:text-6xl">
            Digital growth insights for modern businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Practical guides on websites, AI automation, Google Business growth, WhatsApp systems, and local SEO.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_22px_80px_rgba(7,27,59,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-royal/25 hover:shadow-[0_34px_110px_rgba(7,27,59,0.14)]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  {post.category}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 text-xs font-semibold text-muted">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:gap-3"
                >
                  Read article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}