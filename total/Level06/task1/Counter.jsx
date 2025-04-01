import React, { useReducer } from "react";


const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0); // Initial state = 0

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" }} className="bac">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
};

export default Counter;
