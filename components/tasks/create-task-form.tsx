"use client";

import { createTask } from "@/app/lib/actions";
import { Project } from "@prisma/client";
import { useActionState } from "react";

interface CreateTaskFormProps {
  userId: number;
  projects: Project[];
}

export const CreateTaskForm = ({ userId, projects }: CreateTaskFormProps) => {
  const [state, action, isPending] = useActionState(createTask, {
    userId,
    projectId: undefined,
    title: "",
    description: "",
    priorityLevel: undefined,
    deadline: undefined,
    message: "",
  });

  return (
    <form action={action} className="w-[400px] flex flex-col">
      <input type="hidden" value={userId} name="userId" />
      <label htmlFor="project">Project</label>
      <select name="projectId" id="project" defaultValue="">
        <option disabled value="">
          -- select a project --
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Organize Workspace"
        defaultValue={state.title}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Declutter and organize your desk to improve productivity."
        defaultValue={state.description}
      ></textarea>
      <fieldset>
        <legend>Priority Level</legend>
        <div>
          <input
            type="radio"
            name="priorityLevel"
            id="low"
            value="low"
            defaultChecked={state.priorityLevel === "low"}
          />
          <label htmlFor="low">Low</label>
          <input
            type="radio"
            name="priorityLevel"
            id="medium"
            value="medium"
            defaultChecked={state.priorityLevel === "medium"}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            name="priorityLevel"
            id="high"
            value="high"
            defaultChecked={state.priorityLevel === "high"}
          />
          <label htmlFor="high">High</label>
        </div>
      </fieldset>
      <label htmlFor="deadline">Deadline</label>
      <input type="datetime-local" name="deadline" id="deadline" />
      <button type="submit" className="bg-slate-300">
        Submit
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
};

/*
model Task {
  id            Int      @id @default(autoincrement())
  title         String
  description   String
  priorityLevel String
  deadline      DateTime
  completed     Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  userId        Int
  user          User     @relation(fields: [userId], references: [id])
  projectId     Int?
  project       Project? @relation(fields: [projectId], references: [id])
}
*/
