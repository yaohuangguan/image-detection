import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0" style={{ margin: "auto" }}>
      <Tilt
        className=""
        options={{ max: 80 }}
        style={{ height: "15%", width: "15%" }}
      >
        <div className="tilt-inner">
          <img
            src={
              "https://cdn2.iconfinder.com/data/icons/biometric-data-1/64/Biometric_data-03-512.png"
            }
            alt="logo eye"
          />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
