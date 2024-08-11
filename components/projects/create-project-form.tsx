"use client";

import { createProject } from "@/app/lib/actions";
import { useActionState } from "react";

interface CreateProjectFormProp {
  userId: number;
}

export const CreateProjectForm = ({ userId }: CreateProjectFormProp) => {
  const [state, action, isPending] = useActionState(createProject, {
    userId,
    name: "",
    description: "",
    message: "",
  });

  return (
    <form action={action} className="w-[400px] flex flex-col">
      <input type="hidden" name="userID" value={userId} />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Project Alpha"
        defaultValue={state.name}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="A comprehensive overhaul of the company website."
        defaultValue={state.description}
      />
      <button type="submit" disabled={isPending} className="bg-slate-300">
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {state && <p>{state.message}</p>}
    </form>
  );
};
