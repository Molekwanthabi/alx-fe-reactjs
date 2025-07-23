import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <hr />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
