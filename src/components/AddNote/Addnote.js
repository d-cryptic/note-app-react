import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  // Character limit
  const characterLimit = 200;

  // text area value
  const handleChange = (event) => {
    // strictly Limits the character upto 200 characters
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  // save button click
  const handleSaveClick = () => {
    // checks if the note is empty or note. if not empty, add note to the list
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // Resets the note
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
