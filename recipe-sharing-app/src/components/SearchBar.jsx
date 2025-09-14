// src/components/SearchBar.jsx
import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        marginBottom: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchBar;

