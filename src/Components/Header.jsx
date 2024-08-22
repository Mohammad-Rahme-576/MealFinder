import React from "react";

const Header = ({ query, setQuery, handleSearch, handleRandomMeal, darkMode, toggleDarkMode }) => {
  return (
    <div>
      <header>
        <h1>Meal Finder</h1>
        <div className="search-container">
          <input
            type="text"
            id="search-input"
            placeholder="Search for meals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button id="search-button" onClick={handleSearch}>
            Search
          </button>
          <button id="random-button" onClick={handleRandomMeal}>
            Random Meal
          </button>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>
    </div>
  );
};

export default Header;
