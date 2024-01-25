import React from "react";
import RegisterForm from "../components/RegisterForm";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      <h1 className="text-3xl justify-center text-center font-bold mb-16">
        Create your account
      </h1>

      <RegisterForm />
    </div>
  );
};

export default page;
