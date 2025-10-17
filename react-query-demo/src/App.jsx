import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";
import AboutComponent from "./components/AboutComponent";

// Initialize QueryClient
const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("posts");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          React Query Caching Demo
        </h1>

        {page === "posts" ? (
          <>
            <PostsComponent />
            <button
              onClick={() => setPage("about")}
              className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Go to About Page
            </button>
          </>
        ) : (
          <AboutComponent goBack={() => setPage("posts")} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
