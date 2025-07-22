import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    const term = get().searchTerm.toLowerCase();
    set({
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(term)
      ),
    });
  },

  setRecipes: (recipes) => {
    const term = get().searchTerm.toLowerCase();
    set({
      recipes,
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(term)
      ),
    });
  },

  setSearchTerm: (term) => {
    const filtered = get().recipes.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ searchTerm: term, filteredRecipes: filtered });
  },

  // Favorites
  addFavorite: (recipeId) => {
    const currentFavorites = get().favorites;
    if (!currentFavorites.includes(recipeId)) {
      set({ favorites: [...currentFavorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set({
      favorites: get().favorites.filter((id) => id !== recipeId),
    });
  },

  // Recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter((recipe) =>
      favorites.includes(recipe.id)
    );
    const unique = [...new Set(recommended)];
    set({ recommendations: unique });
  },
}));
