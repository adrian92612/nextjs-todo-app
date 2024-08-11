import { getTasks } from "@/app/lib/actions";
import { TaskCard } from "@/components/tasks/task-card";

const TasksPage = async () => {
  const tasks = (await getTasks()).sort((a, b) => a.id - b.id);
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksPage;
