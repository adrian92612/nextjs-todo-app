"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { LogoutButton } from "../login/logout-button";
import NavLinks from "./navlinks";
import Image from "next/image";

const imageSize = 40;

const Navbar = () => {
  const user = useCurrentUser();
  return (
    <div className="p-4 flex flex-col justify-between">
      <NavLinks />
      {user && (
        <div className="border-t-2 pt-4">
          <div className="flex">
            <p className="text-sm font-semibold">{user.name}</p>
            <Image
              src={user.image}
              alt="User's profile picture"
              width={imageSize}
              height={imageSize}
              className="rounded-full"
            />
          </div>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;
