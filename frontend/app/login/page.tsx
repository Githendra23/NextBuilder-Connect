"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getError, isConnected, login } from "../apiCalls";

const LoginPage = () => {
  const router = useRouter();
  const [connect, setConnect] = useState(isConnected());

  const handleSubmit = async (email: string, password: string) => {
    login(email, password);
    setConnect(isConnected());
    console.log(connect);

    if (connect) router.replace("/articles");
    else console.log(getError());
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
