import React from "react";
import Header from '../Components/Header/Header'

import "../App.css";


class Home extends React.Component {
  state = {
    imageURL: "",
    box: {}
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className='container text-center'>
  
          <h1> Please login to use the service</h1>
        </div>
      </div>
    );
  }
}

export default Home;
