import Link from "next/link";
import { HomeIcon, UsersIcon } from "@heroicons/react/solid";

function Sidebar() {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      {" "}
      <div className="flex items-center p-5">
        <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
          <span className="text-white"></span>
        </span>
        <span className="ml-3">B2Metric</span>
      </div>
      <ul>
        <li>
          <Link href="/dashboard" legacyBehavior>
            <a className="group flex items-center p-4 hover:bg-gray-700 text-[#9d9fab]">
              {" "}
              <HomeIcon className="h-5 w-5 mr-2 group-hover:text-white" />{" "}
              <span className="group-hover:text-white">Overview</span>{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users" legacyBehavior>
            <a className="group flex items-center p-4 hover:bg-gray-700 text-[#9d9fab]">
              {" "}
              <UsersIcon className="h-5 w-5 mr-2 group-hover:text-white" />{" "}
              <span className="group-hover:text-white">Users</span>{" "}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
