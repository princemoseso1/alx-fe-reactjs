import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="text-gray-600">Loading posts...</p>;
  if (error)
    return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refetch Posts
        </button>
      </div>
      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50"
          >
            <h3 className="font-semibold text-blue-700">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
