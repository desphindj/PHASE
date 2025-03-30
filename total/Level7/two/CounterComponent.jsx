import React from "react";
import useCounter from "./UseCounter";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins" } } className="bac">
     
      <h1>{count}</h1>

      <button onClick={increment} style={{ margin: "5px" }}>Increment</button>
      <button onClick={decrement} style={{ margin: "5px" }}>Decrement</button>
      <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
    </div>
  );
};

export default CounterComponent;
