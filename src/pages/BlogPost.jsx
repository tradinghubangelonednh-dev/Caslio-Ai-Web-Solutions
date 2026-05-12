import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="py-24">
        <div className="container-premium text-center">
          <h1 className="text-4xl font-semibold text-navy">Article not found</h1>
          <Link to="/blog" className="mt-6 inline-flex text-sm font-semibold text-royal">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-premium">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-royal"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-royal">
            {post.category}
          </p>

          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-navy md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-sm font-semibold text-muted">
            {post.date} • {post.readTime}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_90px_rgba(7,27,59,0.12)]">
            <img src={post.cover} alt={post.title} className="h-[420px] w-full object-cover" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-border bg-white p-8 shadow-[0_20px_70px_rgba(7,27,59,0.06)] md:p-10">
            <div className="space-y-6 text-base leading-8 text-muted">
              {post.content
                .trim()
                .split('\n')
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}