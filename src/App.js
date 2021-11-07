import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NoteList";
import "./App.css";

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

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
