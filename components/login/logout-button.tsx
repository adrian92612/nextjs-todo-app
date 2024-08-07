import { logOut } from "@/app/lib/actions";

export const LogoutButton = () => {
  return (
    <form action={logOut}>
      <button type="submit">Log Out</button>
    </form>
  );
};
