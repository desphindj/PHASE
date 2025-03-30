import { useState, useRef } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);


  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const clear = () => {
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return { value, handleChange, clear, inputRef };
};

export default useInput;
