import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd, MdViewQuilt } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router"; // NOTE: use `react-router-dom`, not `react-router`

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
    <div className="h-screen w-64 bg-gradient-to-b from-blue-100 to-blue-200 p-6 shadow-md">
      <h1
        onClick={() => navigate("/dashbord")}
        className="text-3xl font-bold text-center mt-3 text-blue-700 mb-8 cursor-pointer hover:font-extrabold hover:underline hover:text-blue-800"
      >
        Dashboard
      </h1>

      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
