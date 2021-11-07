import React from "react";
import "./Header.css";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="save">
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
