import { getUser } from "@/app/lib/actions";
import { CreateProjectForm } from "@/components/projects/create-project-form";

const CreateProjectPage = async () => {
  const user = await getUser();
  return (
    <div>
      Create A Project
      <CreateProjectForm userId={user.id} />
    </div>
  );
};

export default CreateProjectPage;

/**
  model Project {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  tasks     Task[]
}

 */
