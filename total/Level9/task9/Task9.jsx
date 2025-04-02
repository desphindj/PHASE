import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

const Task9 = () => {
  const itemCount = 10000;
  const itemSize = 50;

  const Row = ({ index, style }) => (
    <div style={{ ...style, padding: '10px', borderBottom: '1px solid #ccc' }}>
      Item #{index + 1}
    </div>
  );

  return (
    <List
      height={500}
      itemCount={itemCount}
      itemSize={itemSize}
      width={'100%'}
    >
      {Row}
    </List>
  );
};

ReactDOM.render(<Task9/>, document.getElementById('root'));
