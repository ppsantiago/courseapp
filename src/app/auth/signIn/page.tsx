"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";

import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const onsubmit = () => {
    signIn("google", {
      callbackUrl: "/account",
    });
  };

  return (
    <>
      <div className="h-dvh flex  items-center">
        <div className="flex flex-col justify-center items-center gap-16 bg-gray-600 shadow-2xl shadow-slate-800 h-full w-1/4">
          <p className="text-xl font-semibold text-center text-white">
            Login with Google
          </p>
          <Button
            className="py-6 font-bold text-white"
            variant="ghost"
            color="primary"
            onClick={() => onsubmit()}
          >
            <BsGoogle size={50} />
            Sign in
          </Button>
        </div>
        <div className="flex flex-col pt-20 items-center w-3/4 bg-gray-200 h-full">
          <h1 className="text-3xl text-black font-bold">Course APP</h1>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
