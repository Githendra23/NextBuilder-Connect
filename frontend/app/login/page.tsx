"use client";
import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = async (email: string, password: string) => {};

  return (
    <div className="content-center">
      <h1>Login Page</h1>

      <LoginForm onSubmit={handleSubmit} />

      <Link href="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
