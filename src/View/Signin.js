import React from "react";
import { Link } from "react-router-dom";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signIn = this.signIn.bind(this)
  }
  signIn(e) {
    e.preventDefault();
    
    fetch("http://localhost:8000/signin", {
      headers: {
        'ContentType': "application/json"
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(console.log);
  }
  handleEmail(e) {
    this.setState({ email: e.target.value }, () =>
      console.log(this.state.email)
    );
  }
  handlePassword(e) {
    this.setState({ password: e.target.value }, () =>
      console.log(this.state.password)
    );
  }
  render() {
    return (
      <div className="container my-5">
        <form className="text-center p-5" action="#!">
          <p className="h4 mb-4">Sign in</p>

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            onChange={this.handleEmail}
            placeholder="E-mail"
            required
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            onChange={this.handlePassword}
            placeholder="Password"
            required
          />

          <input
            className="btn btn-info btn-block my-4"
            type="submit"
            onClick={this.signIn}
            value="submit"
          />

          <p>
            Not a member?
            <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signin;
