import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
