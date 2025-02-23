import React, { useState } from "react";
import "../styles/Sharedrecipe.css";

const SharedRecipes = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({ name: "", image: "", description: "" });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.name && recipe.image && recipe.description) {
      addRecipe(recipe);
      setRecipe({ name: "", image: "", description: "" }); // Clear input fields
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="shared-recipes">
      <h2>Share Your Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" value={recipe.name} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={recipe.image} onChange={handleChange} required />
        <textarea name="description" placeholder="Recipe Description" value={recipe.description} onChange={handleChange} required />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default SharedRecipes;
