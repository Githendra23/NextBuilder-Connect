"use client";
import React, { FormEvent, useState } from "react";
import { isConnected, login } from "../apiCalls";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { response, data } = await login(email, password);

    // console.log({ status: response.status, message: data.message });

    if (response.ok) {
      setError("");
      router.replace("/articles");
    } else setError(data.message);
  };

  return (
    <div>
      {error !== "" ? <h2>{error}</h2> : null}

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
    </div>
  );
};

export default LoginForm;
