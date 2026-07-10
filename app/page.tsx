import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="wix-page">
      <header className="site-header">
        <a className="signature-link" href="/" aria-label="Mohammed Malki home">
          <img src="/malki-logo-white.png" alt="Malki" className="signature-logo" />
        </a>
        <nav aria-label="Site">
          <a href="#writings">Writings</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Notes, Ideas, Discoveries.</h1>
      </section>

      <section className="writings" id="writings" aria-labelledby="writings-title">
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

      <footer className="about-footer">
        <div className="portrait-column">
          <img className="portrait" src="/wix-assets/portrait.png" alt="Founder Portrait V1 (1).png" />
          <div className="socials" aria-label="Social Bar">
            <a href="http://mohammedmalki.substack.com" aria-label="substack_edited"><img src="/wix-assets/substack.png" alt="substack_edited" /></a>
            <a href="https://x.com/mmalki27" aria-label="X"><img src="/wix-assets/x.png" alt="X" /></a>
            <a href="https://www.linkedin.com/in/mohammed-malki/" aria-label="LinkedIn"><img src="/wix-assets/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="bio-column">
          <a className="bio-heading" href="/">Hey, I'm Mohammed.</a>
          <p>I’m an aspiring founder and a generalist who enjoys exploring how ideas become reality. I take a holistic approach that blends strategy, growth, product, design, and technology ultimately building systems that create momentum.</p>
          <p>An open-world and story-driven gamer at heart, who is passionate about navigating uncertainty, challenging limitations, and shaping meaning through experience.</p>
          <p>This space is where I explore what I’m learning, what I’m thinking through, and the story I’m living along the way.</p>

          <form className="connect-form" action="mailto:eng.mohammedmalki@gmail.com" method="post">
            <p className="connect-title">Let's Connect</p>
            <label className="email-label">
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter your email" required />
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span>Get me early access to your newsletter.</span>
            </label>
            <button type="submit">Submit</button>
          </form>
          <p className="rights">© All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
