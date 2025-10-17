// src/components/PostsComponent.jsx
import React, { useEffect, useState } from "react";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data.slice(0, 10)); // limiting to 10 for demo
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading posts...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Failed to load posts.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Latest Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white shadow rounded-lg hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsCompone
