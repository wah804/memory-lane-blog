const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

export function getPosts() {
  const posts = Object.entries(modules).map(([path, content]) => {
    const id = path.split('/').pop().replace('.md', '');
    // Simple parser for title (first # heading) and excerpt (first paragraph)
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    
    // Extract first paragraph (after the title)
    const paragraphs = content.split('\n\n').filter(p => p.trim() && !p.startsWith('#'));
    const excerpt = paragraphs.length > 0 ? paragraphs[0].substring(0, 150) + '...' : '';

    return {
      id,
      title,
      excerpt,
      content
    };
  });
  
  return posts;
}

export function getPostById(id) {
  const posts = getPosts();
  return posts.find(post => post.id === id);
}
