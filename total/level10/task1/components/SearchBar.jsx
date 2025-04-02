import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash'; // Import lodash for debouncing

const SearchBar = ({ onCitySelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Debounced API call
  const fetchSuggestions = debounce(async (input) => {
    try {
      const response = await axios.get(`https://api.example.com/geo?query=${input}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }, 600); // 600ms debounce time

  useEffect(() => {
    if (query) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {suggestions.map((city, index) => (
          <li key={index} onClick={() => onCitySelect(city)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
