"use client";
import React, { useEffect, useState } from "react";
import LogOutButton from "../components/LogOutButton";
import Articles from "../components/Articles";
import { checkToken } from "../apiCalls";
import { useRouter } from "next/navigation";

const Page = () => {
  const [connect, setConnect] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkConnection = async () => {
      const { response, data } = await checkToken();

      if (!response.ok) {
        setConnect(false);
        router.replace("/login");
      } else {
        setConnect(true);
      }
    };

    checkConnection();
  }, [router]);

  return (
    <div className="bg-gray-100">
      {connect ? (
        <>
          <h1 className="text-3xl justify-center text-center font-bold mb-16">
            Articles
          </h1>
          <Articles />
          <LogOutButton />
        </>
      ) : null}
    </div>
  );
};

export default Page;
