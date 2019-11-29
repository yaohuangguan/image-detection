import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./View/Home";
import Signin from "./View/Signin";
import Signup from "./View/Signup";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
