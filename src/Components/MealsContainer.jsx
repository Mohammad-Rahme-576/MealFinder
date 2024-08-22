import React from "react";
import MealCard from "./MealCard";
import FeaturedMeals from "./FeaturedMeals";


const MealsContainer = ({meals, featuredMeals, showMealDetails, loading, selectedCategory}) => {

    return(
        <main id="meals-container">
    {loading ? (
      <div className="loader"></div>
    ) : (
      meals.length > 0 ? (
        meals
          .filter(meal => !selectedCategory || meal.strCategory === selectedCategory)
          .map(meal => (
            <MealCard key={meal.idMeal} meal={meal} showMealDetails={showMealDetails} />
          ))
      ) : (
        <FeaturedMeals featuredMeals={featuredMeals} showMealDetails={showMealDetails} />
      )
    )}
  </main>
    )
}

export default MealsContainer;