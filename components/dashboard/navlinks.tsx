import Link from "next/link";
import { FaProjectDiagram, FaHome, FaTasks } from "react-icons/fa";

const linksClass = "flex items-center gap-2 font-semibold text-lg hover:text-slate-300";

const NavLinks = () => {
  return (
    <nav className="flex flex-col gap-2">
      <Link href="/dashboard" className={linksClass}>
        <FaHome /> Home
      </Link>
      <Link href="/dashboard/projects" className={linksClass}>
        <FaProjectDiagram /> Projects
      </Link>
      <Link href="/dashboard/tasks" className={linksClass}>
        <FaTasks /> Tasks
      </Link>
    </nav>
  );
};

export default NavLinks;
