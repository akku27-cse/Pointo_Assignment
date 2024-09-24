import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList.jsx';
import AddNoteModal from './components/AddNoteModal.jsx';
import './App.css'
function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    // Load notes from local storage or API
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);


  const handleAddNote = () => {
    setShowModal(true);
  };

  // const handleEditNote = (note) => {
  //   setEditingNote(note);
  //   setShowModal(true);
  // };


  // const handleSaveNote = (note) => {
  //   const newNotes = [...notes, note];
  //   setNotes(newNotes);
  //   localStorage.setItem('notes', JSON.stringify(newNotes));
  //   setShowModal(false);
  // };
  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowModal(true);
  };
  
  const handleSaveNote = (newNote) => {
    if (editingNote) {
      // Update the existing note
      const updatedNotes = notes.map((n) => (n.id === editingNote.id ? newNote : n));
      setNotes(updatedNotes);
    } else {
      // Create a new note
      setNotes([...notes, newNote]);
    }
    setEditingNote(null);
    setShowModal(false);
  };

  const handleDeleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  

  return (
    <div className="app">
      
    <header>
      <h1>My Notes</h1>
      <button className="button" onClick={handleAddNote}>Add New Note</button>
    </header>
    
    <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
    {showModal && (
        <AddNoteModal
          onSave={handleSaveNote}
          onCancel={() => setShowModal(false)}
          editingNote={editingNote}
          title={editingNote ? 'Edit Note' : 'Add Note'}
        />
      )}
  </div>
  );
}

export default App;