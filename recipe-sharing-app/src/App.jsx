import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";
import EditRecipeForm from "./components/EditRecipeForm";
import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavouritesList />} />
        <Route path="/recommendations" element={<RecommendationList />} />
      </Routes>
    </Router>
  );
}

export default App;
