import React from "react";
import RegisterForm from "../components/RegisterForm";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <RegisterForm />

      <Link
        href="/login"
        className="text-blue-300 hover:underline hover:underline-offset-5"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default page;
