import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      <div
        className="bg-white flex flex-col items-center justify-center border border-transparent rounded-md w-auto h-auto shadow-lg
        px-10 sm:px-20 py-5 md:py-8 md:mx-32 mx-10"
      >
        <h1
          className="justify-center text-center font-bold mb-10
          md:text-3xl text-xl"
        >
          Sign in to your account
        </h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
