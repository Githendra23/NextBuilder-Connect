"use client";
import React, { FormEvent, useState } from "react";
import { getResponse, register } from "../apiCalls";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await register(name, surname, email, password);

    if (getResponse().status == 200) {
      router.replace("/login");
    }
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
