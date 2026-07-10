import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Mohammed Malki`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const bodyParagraphs = post.body.split('\n\n');

  return (
    <main className="post-page">
      <div className="blog-nav">
        <a href="/">&larr; All Posts</a>
      </div>

      <article className="blog-shell">
        <h1>{post.title}</h1>
        
        <div className="post-meta">
          {post.author} · {post.date} · {post.readTime}
        </div>

        <img 
          src={post.image} 
          alt={post.imageAlt} 
          className="post-hero-image"
        />

        <div className="post-body">
          {bodyParagraphs.map((paragraph, index) => {
            // Headers
            if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
            }
            // Horizontal rules
            if (paragraph.trim() === '---') {
              return <hr key={index} />;
            }
            // Blockquotes
            if (paragraph.startsWith('>')) {
              return (
                <blockquote key={index}>
                  {paragraph.replace(/^> /gm, '')}
                </blockquote>
              );
            }
            // Lists
            if (paragraph.match(/^(\d+\.|[-*])/)) {
              const items = paragraph.split('\n').filter(line => line.trim());
              const isOrdered = /^\d+\./.test(items[0]);
              const ListTag = isOrdered ? 'ol' : 'ul';
              
              return (
                <ListTag key={index}>
                  {items.map((item, i) => {
                    const cleanItem = item.replace(/^(\d+\.|\*\*?|-)\s*/, '');
                    return <li key={i} dangerouslySetInnerHTML={{ __html: cleanItem }} />;
                  })}
                </ListTag>
              );
            }
            // Bold markdown
            const withBold = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            
            // Regular paragraphs
            if (paragraph.trim()) {
              return <p key={index} dangerouslySetInnerHTML={{ __html: withBold }} />;
            }
            return null;
          })}
        </div>

        <div className="post-tags">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    </main>
  );
}
