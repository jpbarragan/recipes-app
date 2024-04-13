import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchRecipes from './components/SearchRecipes';
import PersonalizedRecipe from './components/PersonalizedRecipe';


function App() {
  return (
    <div>
      <SearchRecipes />
      <PersonalizedRecipe />
    </div>
  );
}

export default App;
