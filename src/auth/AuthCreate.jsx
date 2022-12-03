import React, { useState } from "react";
import { createNewUser } from "../firebase/auth";

export const AuthCreate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAuthCreate = (e) => {
    e.preventDefault();
    createNewUser(email, password);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleAuthCreate}>
        <input onChange={(e) => setEmail(e.target.value)}>Email</input>
        <input type="password" onChange={(e) => setPassword(e.target.value)}>
          Password
        </input>
      </form>
    </div>
  );
};
