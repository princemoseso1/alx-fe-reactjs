import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  if (isLoading) {
    return <p className="text-gray-600">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="w-full max-w-3xl bg-white p-4 rounded shadow">
      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
      >
        Refresh Posts
      </button>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 p-3 rounded hover:bg-gray-50"
          >
            <h2 className="font-semibold text-lg text-blue-700">
              {post.title}
            </h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
