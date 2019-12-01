import React from "react";
import Header from '../Components/Header/Header'
import Logo from "../Components/Logo/Logo";
import Rank from "../Components/Rank/Rank";
import ImageLink from "../Components/ImageLink/ImageLink";
import Particles from "react-particles-js";
import ImageDisplay from "../Components/ImageDisplay/ImageDisplay";
import "../App.css";
const particleOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 80
      }
    }
  }
};

const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "099f5b8da4b7496ba8cdeb6a5b133d56"
});

class Face extends React.Component {
  state = {
    imageURL: "",
    box: {}
  };
  calculateFaceBox = response => {
    const face = response.outputs[0].data.regions[0].region_info.bounding_box;
    const message = response.outputs[0].model.model_version.status.description;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const face_right = face.right_col * width;
    const face_bottom = face.bottom_row * height;
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face_right,
      bottomRow: height - face_bottom,
      message: message
    };
  };
  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };
  onInputChange = e => {
    this.setState({ imageURL: e.target.value });
  };
  onFormSubmit = async () => {
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.imageURL
      );
      console.log(response);
      const box = this.calculateFaceBox(response);
      this.displayFaceBox(box);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Particles className="particles" params={particleOptions}></Particles>
        <Header></Header>
        <div className="container">
          <Logo></Logo>
          <Rank></Rank>
          <ImageLink
            onInputChange={this.onInputChange}
            onFormSubmit={this.onFormSubmit}
          ></ImageLink>
          <ImageDisplay
            box={this.state.box}
            imageURL={this.state.imageURL}
          ></ImageDisplay>
        </div>
      </div>
    );
  }
}

export default Face;
