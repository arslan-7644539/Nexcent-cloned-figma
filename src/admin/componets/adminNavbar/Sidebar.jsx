import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd, MdViewQuilt } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router"; // ✅ Corrected import
import Logo from "../../../assets/Logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Profile", icon: <CgProfile />, path: "/dashbord/profile" },
    { name: "Add Post", icon: <MdPostAdd />, path: "/dashbord/addPost" },
    {
      name: "Add Authors",
      icon: <AiOutlineUsergroupAdd />,
      path: "/dashbord/addAuthor",
    },
    { name: "View Site", icon: <MdViewQuilt />, path: "/" },
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-br from-blue-50 to-pink-100 shadow-xl border-r border-gray-200 p-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex justify-center items-center mb-10">
          <img
            src={Logo}
            alt="logo"
            onClick={() => navigate("/dashbord")}
            className="w-36 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation */}
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
            >
              <span className="text-[22px]">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer / Tagline */}
      <div className="text-center text-gray-400 text-sm mt-10">
        <p>© {new Date().getFullYear()} MyAdmin</p>
        <p className="text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
