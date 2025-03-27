import { useState } from "react";
import './App.css'
function Twotask7() {
    const [number,setCount]=useState(0);
    function inc()
    {
        setCount(number+1)
    }
    function dec()
    {
        setCount(number-1)
    }
  return (
    <div>
        <h1 className="count">COUNTER</h1>
        <h3>{number}</h3>
        <button onClick={inc()}>INCREMENT</button>
        <button onClick={dec()}>DECREMENT</button>
    </div>
  )
}

export default Twotask7
