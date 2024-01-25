"use client";
import React, { FormEvent, useState } from "react";
import { register } from "../apiCalls";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { response, data } = await register(name, surname, email, password);

    if (response.ok) {
      setError("");
      router.replace("/login");
    } else setError(data.message);
  };

  return (
    <div>
      {error !== "" ? <h2>{error}</h2> : null}

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
    </div>
  );
};

export default RegisterForm;
