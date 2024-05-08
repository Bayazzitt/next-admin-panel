import React, { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { useAuth } from "../contexts/AuthContext";

function Layout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="relative ml-auto">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="text-gray-800 text-sm">
                {" "}
                <strong>Ali Can Bayazıt</strong>
              </span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQGtQH-cR2DcQg/profile-displayphoto-shrink_800_800/0/1714643793681?e=1720656000&v=beta&t=5Uv7ANoWd59DF3oULpA_40RPGzFizdqxPMgAHwBEmes"
                alt="User"
              />
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 p-10 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
