import React from "react";
import "./ImageLink.css";
const ImageLink = ({ onInputChange, onFormSubmit }) => {
  return (
    <div>
      <p className="f3">
        Enter a image url and it will automatically detect where the face is
      </p>
      <div className="center pa4 bg-white br3 shadow-5">
        <input
          type="text"
          name="text"
          className="f4 pa2 w-70 center change"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onFormSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLink;
