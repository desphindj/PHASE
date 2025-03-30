import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins", padding: "20px" }}>
      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          fontFamily: "Poppins",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <p>Search Query: <strong>{query}</strong></p>
      <p>Debounced Query: <strong>{debouncedQuery}</strong></p>
    </div>
  );
};

export default DebouncedSearch;
