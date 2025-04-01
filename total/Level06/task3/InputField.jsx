import React, { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("");

  return (
    <div className="bac">
      <h2>Input Field</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default InputField;
