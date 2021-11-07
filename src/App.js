import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/noteList/NotesList";
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

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
