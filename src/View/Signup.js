import React from "react";
import { Link } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  async signUp(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "post",
        headers: {
          ContentType: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  handleName(e) {
    this.setState({ name: e.target.value }, () => console.log(this.state.name));
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
          <p className="h4 mb-4">Sign up</p>

          <input
            type="text"
            id="defaultLoginFormName"
            className="form-control mb-4"
            placeholder="username"
            onChange={this.handleName}
            required
          />

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
            onChange={this.handleEmail}
            required
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
            onChange={this.handlePassword}
            required
          />

          <input
            className="btn btn-info btn-block my-4"
            type="submit"
            value="Submit"
            onClick={this.signUp}
          />

          <p>
            Already a member?
            <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
