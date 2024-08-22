import React from "react";

const FeaturedMeals = ({ featuredMeals, showMealDetails }) => {
    return (
        <>
              <h2>Featured Meals</h2>
              <div className="featured-meals">
                {featuredMeals.map((meal) => (
                  <div key={meal.idMeal} className="meal" onClick={() => showMealDetails(meal.idMeal)}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className="meal-info">
                      <h3>{meal.strMeal}</h3>
                      <p>{meal.strCategory}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
    )
}

export default FeaturedMeals;