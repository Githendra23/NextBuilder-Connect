import React from "react";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      <h1 className="text-3xl justify-center text-center font-bold mb-16">
        Sign in to your account
      </h1>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
