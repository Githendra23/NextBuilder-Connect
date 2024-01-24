"use client";
import React, { FormEvent, useState } from "react";

interface LoginPropForm {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginPropForm> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        required
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password: </label>
      <input
        required
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
