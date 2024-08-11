"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "./prisma";
import { RiTaskLine } from "react-icons/ri";

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

export const getProjects = async () => {
  const user = await getUser();
  const projects = await prisma.project.findMany({ where: { userId: user.id } });
  return projects;
};

export type ProjectFormState = {
  userId: number;
  name: string;
  description: string;
  message: string;
};

export const createProject = async (previousState: ProjectFormState, formData: FormData) => {
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
    return { ...previousState, message: "Unable to create Project, try again." };
  }
};

export type TaskFormState = {
  userId: number;
  projectId: number | undefined;
  title: string;
  description: string;
  priorityLevel: "low" | "medium" | "high" | undefined;
  deadline: Date | undefined;
  message: string;
};

export const createTask = async (previousState: TaskFormState, formData: FormData) => {
  const task: TaskFormState = {
    userId: parseInt(formData.get("userId") as string, 10),
    projectId: parseInt(formData.get("projectId") as string, 10),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    priorityLevel: formData.get("priorityLevel") as "low" | "medium" | "high",
    deadline: new Date(formData.get("deadline") as string),
    message: "",
  };

  try {
    await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        priorityLevel: task.priorityLevel!,
        deadline: task.deadline!,
        user: {
          connect: { id: task.userId },
        },
        project: {
          connect: { id: task.projectId },
        },
      },
    });

    return {
      ...task,
      title: "",
      description: "",
      priorityLevel: undefined,
      deadline: undefined,
      message: "Task created successfully",
    };
  } catch (error) {
    return { ...task, message: "Failed to create task. Please try again." };
  }
};
