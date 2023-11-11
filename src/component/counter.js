import React, { useState } from 'react'

function Counter() {
  let [count, countState] = useState(0);
  function updateCount(){
    return countState(count+1);
  }
  return (
    <div>
      <p>The value of count is {count} </p>
      <button onClick={updateCount}>Increment</button>
    </div>
  )
}

export default Counter;