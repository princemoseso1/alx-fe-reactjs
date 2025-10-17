import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // 👇 Advanced caching and update configurations
    cacheTime: 1000 * 60 * 5, // Keep cached data for 5 minutes
    staleTime: 1000 * 30, // Data considered fresh for 30 seconds
    refetchOnWindowFocus: false, // Don’t refetch when user focuses back on tab
    keepPreviousData: true, // Keep previous data when refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts List</h1>

      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded-md shadow-sm">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
