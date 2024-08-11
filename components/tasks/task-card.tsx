"use client";

import { deleteTask, updateTaskCompleted } from "@/app/lib/actions";
import { Task } from "@prisma/client";
import { useState } from "react";

interface TaskProp {
  task: Task;
}

export const TaskCard = ({ task }: TaskProp) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsloading] = useState(false);

  const handleOnChange = async () => {
    setIsloading(true);
    try {
      await updateTaskCompleted(task.id, !isCompleted);
      setIsCompleted(!isCompleted);
    } catch (error) {
      console.log("Unable to update, try again.");
    } finally {
      setIsloading(false);
    }
  };

  const handleDelete = async () => {
    setIsloading(true);
    try {
      await deleteTask(task.id);
    } catch (error) {
      console.log("Unable to update, try again.");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.deadline.toLocaleDateString()}</p>
      <input
        type="checkbox"
        name="isCompleted"
        checked={isCompleted}
        disabled={isLoading}
        onChange={handleOnChange}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
