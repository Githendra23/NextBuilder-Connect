import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="content-center">
      <h1>Login Page</h1>

      <LoginForm />

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
