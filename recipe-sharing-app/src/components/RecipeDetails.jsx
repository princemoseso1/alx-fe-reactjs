import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div className="mt-4 flex gap-2">
        <Link to={`/edit/${recipe.id}`} className="text-blue-500">
          Edit
        </Link>
        <Link to="/" className="text-gray-500">
          Back to list
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
