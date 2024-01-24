"use client";
import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = async (email: string, password: string) => {
    console.log({ email, password });

    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
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
        console.log("Response data:", data);
        // Handle the data as needed
      })
      .catch((error) => {
        // Handle fetch error
        console.error(error);
      });
  };

  return (
    <div className="content-center">
      <h1>Login Page</h1>

      <LoginForm onSubmit={handleSubmit} />

      <Link href="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
