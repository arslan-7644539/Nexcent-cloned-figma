import React, { useState, useRef, useEffect, useContext } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/authContext";
import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Dashbord = () => {
  const navigate = useNavigate();
  // ---------------------------------
  const { user, blogs, userData } = useContext(AuthContext);

  const [userinfo, setUserInfo] = useState({
    username: "",
    image: "",
  });
  useEffect(() => {
    const fetchUserData = () => {
      try {
        const singleUser = userData.find((u) => u.uid === user.uid);
        if (singleUser) {
          setUserInfo({
            username: singleUser.username,
            image: singleUser.image,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [user, userData]);

  // ----------------------------------------------------------
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-pink-100 flex">
      <div className="flex-1 p-6 md:p-10">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dashboard Overview
          </h1>

          {/* Profile Dropdown */}
          <div ref={dropdownRef} className="relative">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={userinfo?.image}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-700">
                  {userinfo?.username}
                </p>
              </div>
              <ChevronDown className="text-gray-600" />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg z-50">
                <ul className="py-2 text-gray-700">
                  <li>
                    <button onClick={()=> navigate("/dashbord/profile")} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                      <User size={18} /> Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Total Posts */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Posts
              </h2>
              <MdPostAdd size={28} className="text-blue-500" />
            </div>
            <p className="text-4xl font-bold text-blue-600">{blogs.length}</p>
            <p className="text-sm text-gray-500 mt-1">Updated just now</p>
            <button
              onClick={() => navigate("/dashbord/admin-view-post")}
              className="mt-4 w-full cursor-pointer text-center bg-blue-100 text-blue-700 py-2 rounded-md hover:bg-blue-200 transition"
            >
              View Posts
            </button>
          </div>

          {/* Card 2: Authors */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-700">Authors</h2>
              <AiOutlineUsergroupAdd size={28} className="text-orange-500" />
            </div>
            <p className="text-4xl font-bold text-orange-500">
              {userData?.length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Active this week</p>
            <button
              onClick={() => navigate("/dashbord/view-author-list")}
              className="mt-4 cursor-pointer w-full text-center bg-orange-100 text-orange-700 py-2 rounded-md hover:bg-orange-200 transition"
            >
              View Users
            </button>
          </div>

          {/* Card 3: Site Views */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-700">
                Site Views
              </h2>
              <span className="text-purple-600 text-2xl font-bold">📈</span>
            </div>
            <p className="text-4xl font-bold text-purple-600">3.4K</p>
            <p className="text-sm text-gray-500 mt-1">Last 7 days</p>
            <button className="mt-4 cursor-pointer w-full text-center bg-purple-100 text-purple-700 py-2 rounded-md hover:bg-purple-200 transition">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
