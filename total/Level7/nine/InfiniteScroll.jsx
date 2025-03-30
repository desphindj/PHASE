import React, { useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 5 }, (_, i) => `Item ${prevItems.length + i + 1}`)
      ]);
    }, 1000);
  };

  const { targetRef } = useIntersectionObserver(loadMoreItems, { threshold: 1 });

  return (
    <div style={{ fontFamily: "Poppins", padding: "20px", textAlign: "center" }}>
      <h2>Infinite Scroll</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: "10px", border: "1px solid #ccc", margin: "5px", borderRadius: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
      <div ref={targetRef} style={{ height: "50px", background: "lightgray", marginTop: "10px" }}>
        Loading more...
      </div>
    </div>
  );
};

export default InfiniteScroll;
