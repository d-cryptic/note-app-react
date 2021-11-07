import { MdDeleteForever } from "react-icons/md";
import "./note.css";

const Notes = () => {
  return (
    <div className="note">
      <span>Hello! This is our first note! Hurray!</span>
      <div className="note-footer">
        <small>13/04/2021</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Notes;
