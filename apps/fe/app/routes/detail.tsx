import { useLoaderData } from '@remix-run/react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const loader = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = (await response.json()) as Post[];
  return posts;
};

export default function Detail() {
  const posts = useLoaderData() as Post[];
  return (
    <div>
      <h1>Detail Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>title: {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
