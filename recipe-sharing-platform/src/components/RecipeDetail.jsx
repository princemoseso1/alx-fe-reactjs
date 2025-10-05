import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.recipes.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-lg mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>

          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Instructions
          </h2>
          <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
