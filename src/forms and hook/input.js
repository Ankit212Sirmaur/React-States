import React, { useState } from 'react'

function Input() {
  const [input, setInput] = useState('');
  function handleinputValue(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleinputValue} />
      <button>submit</button>
    </>
  )
}

export default Input