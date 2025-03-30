import React from "react";
import useLocalStorage from "./useLocalStorage";

const StorageComponent = () => {
  const [name, setName] = useLocalStorage("userName", "");

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
      <h2></h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
        style={{
          padding: "8px",
          fontSize: "16px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <p>Stored Name: <strong>{name}</strong></p>
    </div>
  );
};

export default StorageComponent;
