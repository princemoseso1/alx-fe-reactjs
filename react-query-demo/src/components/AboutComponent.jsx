import React from "react";

function AboutComponent({ goBack }) {
  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">About Page</h2>
      <p className="text-gray-600 mb-6">
        This is a simple demo to show React Query caching in action.
        Navigate back to the posts page and notice how the data loads instantly from cache.
      </p>
      <button
        onClick={goBack}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back to Posts
      </button>
    </div>
  );
}

export default AboutComponent;
