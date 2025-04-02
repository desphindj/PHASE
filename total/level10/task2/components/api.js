import axios from 'axios';

const API_KEY = 'YOUR_SPOONACULAR_API_KEY';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}&number=10&apiKey=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
