import React from "react";
import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }} className="boxx">
      <h2>Custom Hook: useToggle</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid black" }}>
          <p>This content is now visible!</p>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
