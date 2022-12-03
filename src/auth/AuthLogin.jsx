import React, { useState } from "react";
import { signInUser } from "../firebase/auth";

export const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthSignIn = (e) => {
    e.preventDefault();
    signInUser(email, password);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleAuthSignIn}>
        <input name="email" onChange={(e) => setEmail(e.target.value)}>
          Email
        </input>
        <input type="password" onChange={(e) => setPassword(e.target.value)}>
          Password
        </input>
      </form>
    </div>
  );
};
