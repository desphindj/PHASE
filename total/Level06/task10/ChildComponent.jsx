import React from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Child Component Rendered!");

  return (
    <div className="bac">
      <h3>Child Component</h3>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default ChildComponent;
