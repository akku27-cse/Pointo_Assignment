import React, { useState } from 'react';

function AddNoteModal({ onSave, onCancel, editingNote,title1 }) {
  const [title, setTitle] = useState(editingNote ? editingNote.title : '');
  const [content, setContent] = useState(editingNote ? editingNote.content : '');

  const handleSave = () => {
    const note = { id: editingNote ? editingNote.id : Date.now(), title, content };
    onSave(note);
  };

  return (
    <div className="modal">
    <div className="modal-content">
    <header>
    <h2>{editingNote ? 'Edit Note' : 'Add Note'}</ h2>
        <h1>{title1}</h1>
      </header>
      
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button className="button" onClick={handleSave}>Save</button>
        <button className="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  </div>
  );
}

export default AddNoteModal;