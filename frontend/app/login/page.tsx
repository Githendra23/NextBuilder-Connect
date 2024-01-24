"use client";
import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const saveJwtToCookie = (jwtToken: string) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds

    document.cookie = `jwt=${jwtToken}; expires=${expirationDate.toUTCString()}; path=/;`;
  };

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
        // saveJwtToCookie(data.token);

        router.replace("/articles");
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

      <Link
        href="/register"
        className="text-blue-300 hover:underline hover:underline-offset-5"
      >
        I don't have an account
      </Link>
    </div>
  );
};

export default LoginPage;
