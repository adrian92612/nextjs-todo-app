import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();
  console.log(session);
  return <div>Dashboard Page</div>;
};

export default DashboardPage;
