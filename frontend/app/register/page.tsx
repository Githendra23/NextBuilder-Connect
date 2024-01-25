import React from "react";
import RegisterForm from "../components/RegisterForm";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      <div className="bg-white flex flex-col items-center justify-center border border-transparent rounded-md px-20 py-10 w-auto h-auto shadow-lg mx-32">
        <h1 className="text-3xl justify-center text-center font-bold mb-10">
          Create your account
        </h1>

        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
