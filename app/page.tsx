import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();

  if (session) redirect("/dashboard");
  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <h1>Task Tracker</h1>
      <p>A very simple and straightforward todo app.</p>
      <Link href="/login" className="px-5 py-1 bg-slate-300">
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default HomePage;
