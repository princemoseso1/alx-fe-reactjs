// src/components/RecipeDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeDetails;

