import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useState, useEffect } from "react";

const RecipeList = () => {
  const { recipes, searchTerm, setSearchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    setFilteredRecipes(
      recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(lower) ||
          recipe.description.toLowerCase().includes(lower)
      )
    );
  }, [recipes, searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Recipes</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {/* Recipes */}
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id} className="mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/add" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">
        Add Recipe
      </Link>
    </div>
  );
};

export default RecipeList;
