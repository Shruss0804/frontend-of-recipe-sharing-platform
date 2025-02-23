import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import pastaImage from "../assets/Pasta Alfredo.jpg"; // Correct path based on your project structure
import burgerImage from "../assets/BURGER.jpg"; // Correct path based on your project structure
import saladImage from "../assets/Salad.jpeg"; // Correct path based on your project structure

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TasteBud Gourmet</h1>
          <p>Unleash your inner Foodie, with a Curated Library of Authentic recipes to bring diverse Cuisines to your Kitchen!!!</p>
          <div className="hero-buttons">
            <Link to="/recipes" className="btn explore-btn">Explore Taste Trails </Link>
            <Link to="/share" className="btn share-btn">Recipe Exchange</Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipes-grid">
          <div className="recipe-card">
          
          <img src={pastaImage} alt="Pasta" />

            <h3>Pasta Alfredo</h3>
            <p>Rich and velvety homemade Alfredo Pasta, busting with creamy goodness.</p>
          </div>
          <div className="recipe-card">
            <img src={burgerImage} alt="Burger" />
            <h3>Juicy Cheeseburger</h3>
            <p>A juicy,classic cheeseburger loaded with all your favorite toppings.</p>
          </div>
          <div className="recipe-card">
            <img src={saladImage} alt="Salad" />
            <h3>Fresh Garden Salad</h3>
            <p>A light and refreshing salad packed with fresh, wholesome ingredients.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
