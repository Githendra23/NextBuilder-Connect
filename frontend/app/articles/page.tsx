import React from "react";
import LogOutButton from "../components/LogOutButton";
import Articles from "../components/Articles";

const page = () => {
  return (
    <div>
      <h1>Articles</h1>

      <Articles />

      <LogOutButton />
    </div>
  );
};

export default page;
