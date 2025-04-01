import React, { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bac">
      <h2>Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This content is now visible!</p>}
    </div>
  );
};

export default Toggle;
