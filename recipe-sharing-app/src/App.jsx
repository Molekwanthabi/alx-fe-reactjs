// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm'; // Optional: if you plan to edit recipes
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router> {/* ✅ Router wrapper added here */}
      <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          {/* Optional: Edit route if needed */}
          <Route
            path="/edit/:id"
            element={
              <EditRecipeForm
                recipe={{ id: 1, title: 'Sample Title', description: 'Sample Description' }}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

