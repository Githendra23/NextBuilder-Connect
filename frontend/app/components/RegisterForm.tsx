"use client";
import React, { FormEvent, useState } from "react";
import { register } from "../apiCalls";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <>
      {error !== "" ? (
        <h2 className="items-center p-3 mb-4 w-full md:text-sm text-xs rounded-lg bg-red-50 text-red-400">
          {error}
        </h2>
      ) : null}

      <div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div>
            <div className="sm:flex sm:flex-row">
              <div className="sm:mr-3">
                <label className="sm:text-base text-sm">Name:</label>
                <input
                  required
                  className="mb-5 mt-1 pl-2 pr-2 block rounded-md border-0 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  md:text-base md:h-10 sm:text-sm text-xs h-8"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="sm:text-base text-sm">Surname: </label>
                <input
                  required
                  className="mb-5 mt-1 pl-2 pr-2 block rounded-md border-0 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  md:text-base md:h-10 sm:text-sm text-xs h-8"
                  type="text"
                  name="name"
                  placeholder="Enter surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="md:text-base text-sm">Email: </label>
              <input
                required
                className="mb-5 mt-1 pl-2 pr-2 block rounded-md border-0 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                md:text-base md:h-10 ms:text-sm text-xs h-8"
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="md:text-base text-sm">Password: </label>
              <input
                required
                className="mb-1 mt-1 pl-2 pr-2 block rounded-md border-0 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                md:text-base md:h-10 ms:text-sm text-xs h-8"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              href="/login"
              className="text-blue-500 text-center hover:underline hover:underline-offset-5
              md:text-base text-sm"
            >
              Already have an account?
            </Link>
          </div>

          <button
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-700
            md:text-base sm:text-sm text-xs"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
