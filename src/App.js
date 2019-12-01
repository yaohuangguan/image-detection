import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./View/Home";
import Signin from "./View/Signin";
import Signup from "./View/Signup";
import Face from "./View/Face";
import "./App.css";

class App extends React.Component {
  state = {
    user: ""
  };
  componentDidMount() {
    fetch("http://localhost:8000/").then(res => res.json()).then(console.log)
  }
  
  render() {
    const { user } = this.state;
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signin" user={user} component={Signin}></Route>
          <Route
            exact
            path="/face"
            render={() => (user ? <Face /> : <Redirect to="/signin" />)}
          ></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
