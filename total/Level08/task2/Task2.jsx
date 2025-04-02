import React from 'react';

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ];
      resolve(mockData);
    }, 2000);
  });
}

function Task2() {
  React.useEffect(() => {
    fetchDataPromise()
      .then((data) => {
        console.log('Fetched Data:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Check the console for fetched data!</h1>
    </div>
  );
}

export default Task2;
