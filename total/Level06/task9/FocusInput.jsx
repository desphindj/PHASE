import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null); 

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }} className="bac">
      <h2>Focus Input Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="text"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <br />
      <button onClick={handleFocus} style={{ marginTop: "10px" }}>
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
