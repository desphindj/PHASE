import React from "react";
import useInput from "./useInput";

const InputComponent = () => {
  const { value, handleChange, clear, inputRef } = useInput("");

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }} className="bor">
      <h2>Custom Hook: useInput</h2>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
        style={{
          padding: "8px",
          fontSize: "16px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button onClick={clear} style={{ padding: "8px", fontSize: "16px" }}>
        Clear
      </button>
      <p>You typed: <strong>{value}</strong></p>
    </div>
  );
};

export default InputComponent;
