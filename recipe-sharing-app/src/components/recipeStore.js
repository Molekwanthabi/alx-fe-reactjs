// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // ✅ added
  recommendations: [], // ✅ added

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
      };
    }),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filterBySearch(recipes, state.searchTerm),
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      const updatedFavorites = state.favorites.filter((favId) => favId !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
        favorites: updatedFavorites,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterBySearch(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterBySearch(state.recipes, term),
    })),

  // ✅ Add/remove favorite
  toggleFavorite: (id) =>
    set((state) => {
      const isFavorite = state.favorites.includes(id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((favId) => favId !== id)
          : [...state.favorites, id],
      };
    }),

  // ✅ Generate recommendations (basic keyword matching)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

    const keywords = favoriteRecipes
      .flatMap((r) =>
        (r.title + ' ' + r.description).toLowerCase().split(/\s+/)
      )
      .filter((word, i, arr) => word.length > 3 && arr.indexOf(word) === i);

    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        keywords.some((word) =>
          (r.title + ' ' + r.description).toLowerCase().includes(word)
        )
    );

    set({ recommendations: recommended });
  },
}));

function filterBySearch(recipes, term) {
  const t = term.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(t) ||
      recipe.description.toLowerCase().includes(t)
  );
}
