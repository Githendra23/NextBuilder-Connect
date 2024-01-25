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

  return <button onClick={signout}>Logout</button>;
};

export default LogOutButton;
