import React from 'react';

const LargeComponent = () => {
  console.log('LargeComponent Rendered');
  return <div>This is a large component!</div>;
};

export default React.memo(LargeComponent);
