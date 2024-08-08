import { auth } from "@/auth";
import { prisma } from "../lib/prisma";

const DashboardPage = async () => {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });
  console.log(user);
  return (
    <div>
      Dashboard Page
      {user && <p>{user.name}</p>}
    </div>
  );
};

export default DashboardPage;
