import { logOut } from "@/app/lib/actions";

export const LogoutButton = () => {
  return (
    <form action={logOut}>
      <button type="submit" className="font-bold text-sm ">
        Log Out
      </button>
    </form>
  );
};
