"use client";
import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  const handleFormSubmit = async (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => {
    await fetch("http://localhost:8080/user/register", {
      method: "POST",
      body: JSON.stringify({ name, surname, email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          // Handle the error, you can throw an exception or handle it in another way
          console.error(response.status);
        }

        // If you need to access the response body, you can do the following:
        return response.json();
      })
      .then((data) => {
        router.replace("/login");
      })
      .catch((error) => {
        // Handle fetch error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Register Page</h1>

      <RegisterForm onFormSubmit={handleFormSubmit} />

      <Link
        href="/login"
        className="text-blue-300 hover:underline hover:underline-offset-5"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default page;
