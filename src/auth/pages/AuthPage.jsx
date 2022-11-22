import React from "react";
import { auth } from "../../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

class AuthLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input name="email" onChange={(e) => this.handleChange(e)}>
          Email
        </input>
        <input
          type="password"
          name="password"
          onChange={(e) => this.handleChange(e)}
        >
          Password
        </input>
      </form>
    );
  }
}
