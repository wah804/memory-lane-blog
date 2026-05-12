import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { getPostById } from '../utils/posts';

function Post() {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <Link to="/" className="back-link">&larr; Back to Home</Link>
      </div>
    );
  }

  // Remove the h1 from markdown content since we'll render it ourselves or just let it render.
  // Actually, react-markdown will render the # title as h1. We can let it be.
  
  return (
    <div className="post-container">
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <article className="post-content">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

export default Post;
