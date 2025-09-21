import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(
    (state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
    })
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Recommended Recipes</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="text-green-500">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
