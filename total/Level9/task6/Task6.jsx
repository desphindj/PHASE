import React, { useState, useEffect } from 'react';

const LargeList = React.memo(({ items }) => {
  console.log('LargeList rendered');
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}, (prevProps, nextProps) => {
  return prevProps.items.length === nextProps.items.length;
});

function Task5() {
  const [count, setCount] = useState(0);
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <LargeList items={items} />
    </div>
  );
}

export default Task5;
