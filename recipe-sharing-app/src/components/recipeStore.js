import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id],
    })),

  generateRecommendations: () =>
    set((state) => {
      // Simple example: recommend first 3 recipes not already favorited
      const recs = state.recipes.filter(
        (r) => !state.favorites.includes(r.id)
      );
      return { recommendations: recs.slice(0, 3) };
    }),
}));

export default useRecipeStore;
