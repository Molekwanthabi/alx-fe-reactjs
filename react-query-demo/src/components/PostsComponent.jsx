import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const { isLoading, error, data, refetch, isPreviousData } = useQuery('posts', fetchPosts, {
    cacheTime: 600000, // 10 minutes (default: 5 minutes)
    staleTime: 300000, // 5 minutes (default: 0)
    refetchOnWindowFocus: false, // (default: true)
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>{isPreviousData ? 'Showing stale data...' : null}</div>
    </div>
  );
}

export default PostsComponent;
