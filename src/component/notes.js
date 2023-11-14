import React, { useState } from 'react'

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setcurrNote] = useState('');


  function updateCurrentNote(event) {
    setcurrNote(event.target.value);
    // -> setcurrNote(input)  capture kar raha hai indirectly
  }
  function addNote() {
    const newNotes = [...notes, input];
    setNotes(newNotes);
    // -> setNotes(notes)  
  }
  return (
    <>
      <input onChange={updateCurrentNote} type="text" />
      <button onClick={addNote}>submit</button>
      <ul>
        {notes.map((note, idx) => {
          return (
            <li key={idx}>
              {note}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Notes;