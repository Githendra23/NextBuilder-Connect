"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LogOutButton = () => {
  const router = useRouter();

  const logout = () => {
    router.replace("/login");
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogOutButton;
