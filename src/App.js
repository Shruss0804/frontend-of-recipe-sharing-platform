import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";  
import Recipes from "./pages/Recipes";
import SharedRecipes from "./pages/Sharedrecipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);

    // Load saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    setUserRecipes(savedRecipes);
  }, []);

  const addRecipe = (recipe) => {
    const updatedRecipes = [...userRecipes, recipe];
    setUserRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = userRecipes.filter((_, i) => i !== index);
    setUserRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes userRecipes={userRecipes} deleteRecipe={deleteRecipe} />} />
        <Route path="/share" element={<SharedRecipes addRecipe={addRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
