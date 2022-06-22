import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="flex flex-wrap gap-2 container">
      {notes.map((note) => {
        return <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete}/>;
      })}

      <AddNote handleAddNote={handleAddNote} />

  
    </div>
  );
};

export default NoteList;
