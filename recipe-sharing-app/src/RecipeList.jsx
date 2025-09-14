// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar />
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
      <Link to="/add">Add a Recipe</Link>
    </div>
  );
};

export default RecipeList;
