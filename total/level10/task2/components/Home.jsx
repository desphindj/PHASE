import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'YOUR_SPOONACULAR_API_KEY';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}?number=10&apiKey=${API_KEY}`)
      .then(response => setRecipes(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Popular Recipes</h1>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
