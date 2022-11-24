import React from "react";
import { auth } from "../../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleAuthSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <input name="email" onChange={(e) => setEmail(e.target.value)}>
        Email
      </input>
      <input type="password" onChange={(e) => setPassword(e.target.value)}>
        Password
      </input>
    </form>
  );
}
