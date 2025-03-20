import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd, MdViewQuilt, MdOutlineInsertComment } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router";
import Logo from "../../../assets/Logo.png";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { PiEyeClosedFill } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { name: "Profile", icon: <CgProfile />, path: "/dashbord/profile" },
    { name: "Add Post", icon: <MdPostAdd />, path: "/dashbord/addPost" },
    {
      name: "Add Authors",
      icon: <AiOutlineUsergroupAdd />,
      path: "/dashbord/addAuthor",
    },
    {
      name: "View-Comments",
      icon: <MdOutlineInsertComment />,
      path: "/dashbord/view-comments",
    },
    { name: "View Site", icon: <MdViewQuilt />, path: "/" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={`h-screen ${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-br from-blue-50 to-pink-100 shadow-xl border-r border-gray-200 transition-all duration-500 p-4 flex flex-col justify-between`}
      >
        {/* Logo and Toggle */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div
              className={`flex items-center ${
                isOpen ? "justify-between w-full" : "justify-center w-full"
              }`}
            >
              {isOpen && (
                <img
                  src={Logo}
                  alt="logo"
                  onClick={() => navigate("/dashbord")}
                  className="w-36 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="text-xl text-white bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <PiEyeClosedFill /> : <PiEyeClosedDuotone />}
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-3">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg text-[17px] font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`
                }
                title={!isOpen ? item.name : ""}
              >
                <span className="text-[22px]">{item.icon}</span>
                <span className={`whitespace-nowrap ${!isOpen && "hidden"}`}>
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm mt-10">
          {isOpen && (
            <>
              <p>© {new Date().getFullYear()} MyAdmin</p>
              <p className="text-xs">All rights reserved</p>
            </>
          )}
          {/* Collapse/Expand Button */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
