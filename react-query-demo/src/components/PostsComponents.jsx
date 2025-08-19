// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,      // true while a background refetch is happening
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="p-4">Loading posts…</p>;
  if (isError)   return <p className="p-4 text-red-600">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <div className="mb-3 flex items-center gap-2">
        <button
          onClick={() => refetch()}
          className="px-3 py-1.5 rounded bg-black text-white"
        >
          Refetch
        </button>
        {isFetching && <span className="text-sm opacity-70">Refreshing…</span>}
      </div>

      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border rounded p-3">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm opacity-80">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
