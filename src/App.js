import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NoteList";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/05/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/06/2021",
    },
  ]);

  // Search and find notes
  const [searchText, setSearchNote] = useState("");

  // addNote captures the entered text and creates the id and date
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    // Fetches the old notes and add the new note to the array
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Deleting the note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
