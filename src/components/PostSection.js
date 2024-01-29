import Link from 'next/link';

export  function PostList({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
