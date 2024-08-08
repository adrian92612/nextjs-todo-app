import { auth } from "@/auth";
import { login } from "../lib/actions";
import { redirect } from "next/navigation";

const inputClass = "border px-2 py-1 text-center rounded-md";

const LoginPage = async () => {
  // const session = await auth();
  // if (session) redirect("/dashboard");
  return (
    <div className="h-full flex justify-center items-center">
      <form action={login} className="border-2 p-5 flex flex-col w-[400px]">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          className={inputClass}
        />
        <label htmlFor="password" className="mt-2">
          Password
        </label>
        <input type="password" name="password" id="password" className={inputClass} />
        <button type="submit" className={`${inputClass} mt-4 bg-slate-300`}>
          Log In
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button type="submit" name="action" value="google" className={`${inputClass} bg-slate-300`}>
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
