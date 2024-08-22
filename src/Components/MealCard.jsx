import React from "react";

const MealCard = ({ meal, showMealDetails }) => {
    return (
        <div key={meal.idMeal} className="meal" onClick={() => showMealDetails(meal.idMeal)}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className="meal-info">
                    <h3>{meal.strMeal}</h3>
                    <p>{meal.strCategory}</p>
                  </div>
                </div>
    )
}
export default MealCard;