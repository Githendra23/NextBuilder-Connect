"use client";
import React, { FormEvent, useState } from "react";

interface RegisterFormProps {
  onFormSubmit: (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFormSubmit(name, surname, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        required
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Surname: </label>
      <input
        required
        type="text"
        name="name"
        placeholder="Enter surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
