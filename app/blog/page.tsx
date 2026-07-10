import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writings | Mohammed Malki',
  description: 'Notes, Ideas, Discoveries.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <main className="wix-page">
      <header className="site-header">
        <a className="signature-link" href="/" aria-label="Mohammed Malki home">
          <img src="/malki-logo.jpg" alt="Malki" className="signature-logo" />
        </a>
        <nav aria-label="Site">
          <a href="/#writings">Writings</a>
        </nav>
      </header>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Notes, Ideas, Discoveries.</h1>
      </section>

      <section className="writings" aria-labelledby="writings-title">
        <h2 id="writings-title">Writings</h2>
        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <a className="post-image-link" href={`/post/${post.slug}`} aria-label={post.title}>
                <img src={post.image} alt={post.imageAlt} />
              </a>
              <a className="post-title" href={`/post/${post.slug}`}>{post.title}</a>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
