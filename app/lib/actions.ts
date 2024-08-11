"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "./prisma";

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

export const getUser = async () => {
  const session = await auth();
  return session?.user;
};

export type FormState = {
  userId: number;
  name: string;
  description: string;
  message: string;
};

export const createProject = async (previousState: FormState, formData: FormData) => {
  const userId = parseInt(formData.get("userID") as string, 10);
  const projectName = formData.get("name") as string;
  const projectDescription = formData.get("description") as string;
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await prisma.project.create({
      data: {
        name: projectName,
        description: projectDescription,
        user: {
          connect: { id: userId },
        },
      },
    });

    return {
      userId,
      name: "",
      description: "",
      message: "Project Created",
    };
  } catch (error) {
    console.log(error);
    return {
      userId,
      name: projectName,
      description: projectDescription,
      message: "Unable to create project, try again.",
    };
  }
};
