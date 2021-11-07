import Note from "../note/Note";
import "./NotesList.css";

const NotesList = ({}) => {
  return (
    <div className="notes-list">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesList;
