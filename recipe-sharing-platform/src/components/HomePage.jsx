import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Jollof Rice",
    description: "Classic West African rice dish cooked with tomatoes and spices.",
    image: "/images/jollof.jpg",
  },
  {
    id: 2,
    title: "Egusi Soup",
    description: "Rich and hearty melon seed soup served with pounded yam.",
    image: "/images/egusi.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
