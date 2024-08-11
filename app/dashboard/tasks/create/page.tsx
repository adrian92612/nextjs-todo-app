import { getProjects, getUser } from "@/app/lib/actions";
import { CreateTaskForm } from "@/components/tasks/create-task-form";

const CreateTaskPage = async () => {
  const [user, projects] = await Promise.all([getUser(), getProjects()]);
  return (
    <div>
      <h1>Create A Task</h1>
      <CreateTaskForm userId={user.id} projects={projects} />
    </div>
  );
};

export default CreateTaskPage;
