import React, { useState } from "react";
import "./App.css";

// Display Component
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
    />
  );
}

// Button Component
function Button({ label, className = "", onClick }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const STUDENT_NAME = "JOCELYNE ERIN V. BUSTOS";
  const SECTION = "BSIT-WMD3A";
  const SUBJECT_CODE = "C-PCIT9";

  const DEFAULT_TITLE = "10 Things That Require Zero Talent";
  const [displayValue, setDisplayValue] = useState(DEFAULT_TITLE);

  const keyMap = {
    '1': 'Being On Time',
    '2': 'Making An Effort',
    '3': 'Being High Energy',
    '4': 'Having A Positive Attitude',
    '5': 'Being Passionate',
    '6': 'Using Good Body Language',
    '7': 'Being Coachable',
    '8': 'Doing A Little Extra',
    '9': 'Being Prepared',
    '0': 'Having A Strong Work Ethic',
  };

  const handleButtonClick = (label) => {
    if (label === "NAME") {
      setDisplayValue(STUDENT_NAME.toUpperCase());
    } else if (label === "SUBJ") {
      setDisplayValue(SUBJECT_CODE.toUpperCase());
    } else if (keyMap[label]) {
      setDisplayValue(keyMap[label]);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* Pink Header Section */}
        <div className="top-section">
          <h1 className="header">{STUDENT_NAME} - {SECTION}</h1>
          <Display value={displayValue} />
        </div>
        
        {/* White Keypad Section */}
        <div className="buttons-section">
          <div className="buttons">
            <Button label="7" onClick={() => handleButtonClick("7")} />
            <Button label="8" onClick={() => handleButtonClick("8")} />
            <Button label="9" onClick={() => handleButtonClick("9")} />

            <Button label="4" onClick={() => handleButtonClick("4")} />
            <Button label="5" onClick={() => handleButtonClick("5")} />
            <Button label="6" onClick={() => handleButtonClick("6")} />

            <Button label="1" onClick={() => handleButtonClick("1")} />
            <Button label="2" onClick={() => handleButtonClick("2")} />
            <Button label="3" onClick={() => handleButtonClick("3")} />

            <Button label="NAME" className="btn-pink" onClick={() => handleButtonClick("NAME")} />
            <Button label="0" onClick={() => handleButtonClick("0")} />
            <Button label="SUBJ" className="btn-pink" onClick={() => handleButtonClick("SUBJ")} />
          </div>
        </div>
      </div>
    </div>
  );
}