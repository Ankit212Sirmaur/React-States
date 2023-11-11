import React, { useState } from 'react'

function Fruit() {
    const [fruit, setFruit] = useState('Apple');
    function updateFruit(){
        return setFruit('littichie');
    }
    function updatingFruit (fruit) {
        return setFruit(fruit);
    }
  return (
    <div>
        <p>the value of Fruit is {fruit} </p>
        <button onClick={updateFruit}>Papaya</button>
        <button onClick = {() => setFruit('Papaya')} > Papaya</button>
        <button onClick = {() => setFruit('Mango')} > Mango</button>
        <button onClick = {() => setFruit('Gauava')} > Gauava</button>
        <button onClick={() => updatingFruit('samosa')}> just click this</button>
   </div>
  )
}

export default Fruit  