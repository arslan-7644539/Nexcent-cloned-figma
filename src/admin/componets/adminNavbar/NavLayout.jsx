import React from "react";
import { Outlet } from "react-router"; // ✅ Correct import
import Sidebar from "./Sidebar";

const NavLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - fixed width */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
