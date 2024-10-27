import React, { useState } from 'react'

function File1(props) {
    const[countInChild,setCountInChild] = useState(0);

    function updateCountinChild(){
        setCountInChild(countInChild+1);
        props.onCountUpdate(countInChild+1);
    }
  return (
    <div>
        <p>Inside the child1: {countInChild}</p>
        <button onClick={updateCountinChild}>Increment</button>
    </div>
  )
}

export default File1