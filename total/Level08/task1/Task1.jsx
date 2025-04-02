import React from 'react';

function fetchData(callback) {
  setTimeout(() => {
    const mockData = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    callback(mockData);
  }, 2000);
}

function handleData(data) {
  console.log('Fetched Data:', data);
}

function Task1() {
  React.useEffect(() => {
    fetchData(handleData);
  }, []);

  return (
    <div>
      <h1>Check the console for fetched data!</h1>
    </div>
  );
}

export default Task1;
