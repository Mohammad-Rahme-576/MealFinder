# MealFinder

MealFinder is a React application that allows users to search for meals,
view featured meals, and filter by categories. 
It utilizes the MealDB API to fetch meal data and display detailed information about each meal.

## Features

- Search for meals by name
- View a list of featured meals
- Filter meals by categories
- View detailed information about each meal, including ingredients and instructions
- Toggle dark mode for a better user experience

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: A build tool that provides a fast development environment
- **MealDB API**: An API for fetching meal data
- **CSS**: For styling the application

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohammad-Rahme-576/MealFinder.git

2. Navigate to the project directory:
    cd MealFinder

3. Install the dependencies:
    npm install

4. Create a .env file in the root of the project directory and add the following environment variables:
    VITE_API_URL=https://www.themealdb.com/api/json/v1/1/search.php?s=
    VITE_RANDOM_MEAL_URL=https://www.themealdb.com/api/json/v1/1/random.php
    VITE_CATEGORIES_URL=https://www.themealdb.com/api/json/v1/1/list.php?c=list

5. Start the development server:
    npm run dev

## Usage
    Open your browser and go to http://localhost:5173 to view the application.
    Use the search bar to find meals by name.
    Click on featured meals to view details.
    Use the category filter to narrow down the list of meals.
    Toggle dark mode using the dark mode switch.