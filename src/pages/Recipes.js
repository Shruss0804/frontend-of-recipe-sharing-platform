import React from "react";
import "../styles/Recipes.css";

const recipesData = [
  {
    id: 1,
    name: "Pasta Alfredo",
    image: require("../assets/Pasta Alfredo.jpg"),
    description: "Rich and velvety homemade Alfredo Pasta, busting with creamy goodness.",
  },
  {
    id: 2,
    name: "Juicy Cheeseburger",
    image: require("../assets/BURGER.jpg"),
    description: "A juicy,classic cheeseburger loaded with all your favorite toppings.",
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    image: require("../assets/Salad.jpeg"),
    description: "A light and refreshing salad packed with fresh, wholesome ingredients.",
  },
  {
    id: 4,
    name: "Sushi Platter",
    image: require("../assets/sushiplatter.jpg"), 
    description: "A tempting selection of fresh and flavorful sushi rolls.",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image: require("../assets/Chocolate Cake.jpg"),
    description: "A heavenly slice of rich, moist chocolate cake crowned with silky Ganache.",
  },
];

const Recipes = () => {
  return (
    <section className="featured-recipes">
      <h2>Featured Recipes</h2>
      <div className="recipes-grid">
        {recipesData.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
