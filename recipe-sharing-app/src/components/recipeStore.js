// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

function filterBySearch(recipes, term) {
  const t = term.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(t) ||
    recipe.description.toLowerCase().includes(t) ||
    (recipe.ingredients?.join(', ') || '').toLowerCase().includes(t) ||
    (recipe.time?.toString() || '').includes(t)
  );
}
