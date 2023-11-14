import React, { useState } from 'react'

function Fruit() {
    const [fruit, setFruit] = useState('Apple');
    const [input, setInput] = useState('');
    
    const updateFruit = () =>{
        setFruit(input)
    }

    function UpdateInputText(event){
        const currInputValue = event.target.value;
        setInput(currInputValue);
    }
  return (
    <div>
        <p>the value of Fruit is {fruit} </p>
        <input type="text" onChange={UpdateInputText}/>
        {/* <button onClick={ () => updateFruit()}>submit</button> */}
        
   </div>
  )
}

export default Fruit  