"use client";
import React, { FormEvent, useState } from "react";
import { login } from "../apiCalls";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { response, data } = await login(email, password);

    if (response.ok) {
      setError("");
      router.replace("/articles");
    } else setError(data.message);
  };

  return (
    <>
      {error !== "" ? (
        <h2 className="items-center p-3 mb-4 text-sm rounded-lg bg-red-50 dark:text-red-400">
          {error}
        </h2>
      ) : null}

      <div className="bg-white flex flex-col items-center justify-center border border-transparent rounded-md w-96 h-96 shadow-lg">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div>
            <label>Email address </label>
            <input
              required
              className="mb-5 mt-2 pr-2 pl-2 block rounded-md border-0 w-full h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password </label>
            <input
              required
              className="mb-5 mt-2 pr-2 pl-2 block rounded-md border-0 w-full h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-700"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <Link
          href="/register"
          className="text-blue-500 text-center hover:underline hover:underline-offset-5 mt-4"
        >
          I don't have an account
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
