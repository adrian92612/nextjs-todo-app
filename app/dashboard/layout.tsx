import { LogoutButton } from "@/components/login/logout-button";
import { auth } from "@/auth";
import Navbar from "@/components/dashboard/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full">
      <Navbar />
      <section className="w-full flex justify-center items-center border-2">{children}</section>
    </main>
  );
};

export default DashboardLayout;
