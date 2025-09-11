import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      formErrors.ingredients = "Please include at least 2 ingredients.";
    }
    if (!instructions.trim()) formErrors.instructions = "Instructions are required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      };
      console.log("New recipe submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
      alert("Recipe submitted successfully! 🎉 (not yet saved to database)");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe 📝</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="List ingredients (one per line)"
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full border rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write steps (one per line)"
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
