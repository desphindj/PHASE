import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false); 


  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }}>
      <h2>useCallback Memoized Callback</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>


      <p>Other State: {otherState ? "ON" : "OFF"}</p>

      <button onClick={() => setOtherState(!otherState)} style={{ marginLeft: "10px" }}>
        Toggle Other State
      </button>

      <ChildComponent onIncrement={increment} />
    </div>
  );
};

export default ParentComponent;
