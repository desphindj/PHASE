import React from 'react'
import { useState } from 'react'


function Taskeight() {

    const [isVisible, setIsVisible] = useState(true);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='bor'>

      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Heading
      </button>
      {isVisible && <h1>This is a heading</h1>}
    </div>
  );
}



export default Taskeight
