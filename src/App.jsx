import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Components/Header.jsx";
import CategoryFilter from "./Components/CategoryFilter.jsx";
import MealsContainer from "./Components/MealsContainer.jsx";

const API_URL = import.meta.env.VITE_API_URL;
const RANDOM_MEAL_URL = import.meta.env.VITE_RANDOM_MEAL_URL;
const CATEGORIES_URL = import.meta.env.VITE_CATEGORIES_URL;

const App = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [featuredMeals, setFeaturedMeals] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchFeaturedMeals();
    fetchCategories();
  }, []);

  const fetchFeaturedMeals = async () => {
    try {
      const featuredMealsData = await Promise.all(
        Array(6)
          .fill()
          .map(() => fetch(RANDOM_MEAL_URL).then((res) => res.json()))
      );
      setFeaturedMeals(featuredMealsData.map((data) => data.meals[0]));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(CATEGORIES_URL);
      const data = await response.json();
      setCategories(data.meals.map((meal) => meal.strCategory));
    } catch (error) {
      console.error(error);
    }
  };

  const searchMeals = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL + query);
      const data = await response.json();
      const fetchedMeals = data.meals || [];
      if (fetchedMeals.length > 0) {
        setMeals(fetchedMeals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      searchMeals(query);
      setQuery("");
    }
  };

  const showMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      const meal = data.meals[0];
      const modalElement = document.createElement("div");
      modalElement.classList.add("modal");
      const contentElement = document.createElement("div");
      contentElement.classList.add("modal-content");
      const imageElement = document.createElement("img");
      imageElement.src = meal.strMealThumb;
      contentElement.appendChild(imageElement);
      const titleElement = document.createElement("h2");
      titleElement.innerText = meal.strMeal;
      contentElement.appendChild(titleElement);
      const ingredientsElement = document.createElement("ul");
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && measure) {
          const ingredientItem = document.createElement("li");
          ingredientItem.innerText = `${ingredient}: ${measure}`;
          ingredientsElement.appendChild(ingredientItem);
        }
      }
      contentElement.appendChild(ingredientsElement);
      const instructionsElement = document.createElement("p");
      instructionsElement.innerText = meal.strInstructions;
      contentElement.appendChild(instructionsElement);
      const closeButton = document.createElement("button");
      closeButton.innerText = "Close";
      closeButton.addEventListener("click", () => modalElement.remove());
      contentElement.appendChild(closeButton);
      modalElement.appendChild(contentElement);
      document.body.appendChild(modalElement);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRandomMeal = async () => {
    try {
      const response = await fetch(RANDOM_MEAL_URL);
      const data = await response.json();
      const randomMeal = data.meals[0];
      showMealDetails(randomMeal.idMeal);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        handleRandomMeal={handleRandomMeal}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MealsContainer
        meals={meals}
        showMealDetails={showMealDetails}
        loading={loading}
        featuredMeals={featuredMeals}
      />
    </div>
  );
};

export default App;
