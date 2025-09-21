import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const FavouritesList = () => {
  const { recipes, favorites } = useRecipeStore((state) => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (favRecipes.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      <ul>
        {favRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
