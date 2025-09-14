import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <ul>
          {recipes.map((r) => (
            <li key={r.id}>
              <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </li>
          ))}
        </ul>

        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
