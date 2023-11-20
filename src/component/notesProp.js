import React from 'react';

function NotesProp(props) {
  return (
    <div className='noteProp'>
      <p className='noteText'>{props.note}</p>
    </div>
  );
}

export default NotesProp;
