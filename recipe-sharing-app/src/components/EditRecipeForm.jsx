import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ now matches the check
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-bold mb-2">Edit Recipe</h2>
      <input
        className="border p-2 mb-2 w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <textarea
        className="border p-2 mb-2 w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;
