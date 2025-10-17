import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          React Query Demo - Posts
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
