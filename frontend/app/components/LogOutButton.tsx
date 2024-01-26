"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { logout } from "../apiCalls";

const LogOutButton = () => {
  const router = useRouter();

  const signout = () => {
    logout;
    router.replace("/login");
  };

  return (
    <button
      className="bg-red-500 m-2 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-red-700
      md:text-base text-xs"
      onClick={signout}
    >
      Logout
    </button>
  );
};

export default LogOutButton;
