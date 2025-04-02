import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe({ recipe }) {
  const { id } = useParams();

  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Recipe ID: {id}</p>
    </div>
  );
}

export default Recipe;
