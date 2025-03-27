import React from 'react'
import { useState } from 'react';
function Tasknine() {
    const [inputText, setInputText] = useState('');


    const handleInputChange = (event) => 
        {
      setInputText(event.target.value);
    };
  return (
    <div className='bor'>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        className='booo'
      />
      
    
      <p className='para'>You typed: {inputText}</p>
    </div>
  )
}

export default Tasknine




  
    
