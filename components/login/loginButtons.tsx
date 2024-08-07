"use client";

import { signIn } from "next-auth/react";
import { ReactNode } from "react";

interface LoginButtonProps {
  provider: "google" | "github";
  children: ReactNode;
}

const redirect: string = "/dashboard";

export const LoginButton = ({ provider, children }: LoginButtonProps) => {
  const handleOnClick = () => {
    signIn(provider, { redirectTo: redirect });
  };
  return <span onClick={() => handleOnClick()}>{children}</span>;
};
