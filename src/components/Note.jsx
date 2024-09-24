import React from 'react';

function Note({ note, onDelete, onEdit }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content.substring(0, 100)}</p>
      <button className="button" onClick={() => onDelete(note.id)}>Delete</button>
      <button className="button" onClick={() => onEdit(note)}>Edit</button>
    </div>
  );
}

export default Note;