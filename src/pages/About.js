import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import aboutImage from "../assets/about-image.jpg"; // Add an image to your project folder

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Text Content */}
        <div className="about-content">
          <h2 className="about-title">Welcome to TasteBud Gourmet!</h2>
          <p className="about-text">
            <strong>TasteBud Gourmet</strong> is your ultimate destination for discovering and sharing delicious recipes! Whether you're a professional chef or a home cook, we bring you a vast collection of recipes from around the world.
          </p>
          <p className="about-text">
            Explore <strong>mouth-watering dishes</strong>, share your own creations, and connect with a vibrant community of food lovers. Let's make cooking fun and exciting together!
          </p>
          <Link to="/recipes" className="explore-btn">Explore Recipes</Link>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Delicious Food" />
        </div>
      </div>
    </section>
  );
};

export default About;
