"use server";

import { signIn, signOut } from "@/auth";

export const login = async (formData: FormData) => {
  const provider = formData.get("action") as string | null;
  console.log(provider);
  if (provider) {
    await signIn(provider, { redirectTo: "/dashboard" });
  }
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};
