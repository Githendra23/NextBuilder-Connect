import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      <div className="bg-white flex flex-col justify-center border border-transparent rounded-md px-20 py-10 w-auto h-auto shadow-lg mx-32">
        <h1 className="text-3xl justify-center text-center font-bold mb-10">
          Sign in to your account
        </h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
