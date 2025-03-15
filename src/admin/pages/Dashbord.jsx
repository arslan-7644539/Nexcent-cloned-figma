import React, { useState, useRef, useEffect, useContext } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext, useAuth } from "../../context/authContext";
import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Dashbord = () => {
  const navigate = useNavigate();
  const { user, blogs, userData } = useContext(AuthContext);
  console.log("🚀 ~ Dashbord ~ user:", user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="  w-full h-screen bg-gradient-to-br from-fuchsia-100 to-pink-100 flex">
      {/* Sidebar (optional) */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-8 relative">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>

          {/* Profile + Dropdown */}

          <div
            className="relative flex items-center space-x-3"
            ref={dropdownRef}
          >
            <div className="flex flex-col items-center">
              <img
                src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/473402618_1317270199580736_2652709947685588980_n.jpg?ccb=11-4&oh=01_Q5AaIbau7BThPDJcgc1M8LI97iGPx7Wblm5JXUywOymzVll0&oe=67DED6CC&_nc_sid=5e03e0&_nc_cat=102"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <p> {user.displayName} </p>
            </div>
            <ChevronDown
              size={20}
              className="text-gray-600 cursor-pointer transition-transform duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-xl border border-gray-200 z-20 animate-fade-in-up">
                <ul className="py-2 text-gray-700">
                  <li>
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2">
                      <User size={18} /> Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 text-red-500"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Total Posts
            </h2>
            <p className="text-4xl font-bold text-blue-600 flex flex-row justify-around">
              {" "}
              {blogs.length}{" "}
              <span
                onClick={() => navigate("/dashbord/admin-view-post")}
                className="cursor-pointer flex flex-col gap-2 items-center"
              >
                <MdPostAdd className="cursor-pointer" />
                <h3 className="text-[23px]">View Post</h3>
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Updated just now</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Authors
            </h2>
            <p className=" cursor-pointer text-4xl font-bold text-green-600 flex flex-row justify-around">
              {" "}
              {userData?.length}
              <span onClick={()=> navigate("/dashbord/view-author-list")} className="cursor-pointer flex flex-col gap-2 items-center">
                <AiOutlineUsergroupAdd />
                <h3 className="text-[23px]">View Users</h3>
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Active this week</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Site Views
            </h2>
            <p className="text-4xl font-bold text-purple-600">3.4K</p>
            <p className="text-sm text-gray-500 mt-2">Last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
