import React from 'react';
import './botton.css';

export default function Botton() {
  return (
    <div className="button-container">
      <div className="button-wrapper">
        <input type="button" className="upload-button" value="Upload image" />
        <br />
        <br />
        <input type="button" className="submit-button" value="Submit" />
      </div>
    </div>
  );
}
