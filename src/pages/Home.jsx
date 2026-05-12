import { Link } from 'react-router-dom';
import { getPosts } from '../utils/posts';

function Home() {
  const posts = getPosts();

  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">Memory Lane</h1>
        <p className="hero-subtitle">A journey through my learnings in web development.</p>
      </header>

      <main className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2 className="post-card-title">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="post-card-excerpt">{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more-btn">Read More &rarr;</Link>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Home;
