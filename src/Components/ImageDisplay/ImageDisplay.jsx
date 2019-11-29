import React from "react";
import "./display.css";
const ImageDisplay = ({ imageURL, box }) => {
  const { topRow, rightCol, bottomRow, leftCol, message } = box;
  return (
    <>
      <br />
      <br />
      <br />
      <h3 className="center blue">{message}</h3>
      <div className="center" style={{ position: "relative" }}>
        <div
          className="boundingBox"
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol
          }}
        ></div>

        <img src={imageURL} id="inputImage" alt="imagedetection" />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default ImageDisplay;
