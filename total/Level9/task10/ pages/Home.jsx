import React, { useMemo, useCallback } from 'react';
import ItemList from '../components/ItemList';
import LargeComponent from '../components/LargeComponent';

const Home = () => {
  const data = useMemo(() => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`), []);

  const handleClick = useCallback(() => {
    console.log('Button Clicked!');
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
      <ItemList items={data} />
      <LargeComponent />
    </div>
  );
};

export default Home;
