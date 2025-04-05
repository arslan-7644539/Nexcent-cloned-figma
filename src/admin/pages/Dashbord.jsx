import React, { useState, useRef, useEffect, useContext } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/authContext";
import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import UserRole from "../componets/userRole/UserRole";

const Dashbord = () => {
  // -----------------------

  const [role, setRole] = useState(null);
  useEffect(() => {
    UserRole().then((userRole) => {
      setRole(userRole);
    });
  }, []);

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
    <div className="w-full h-screen  bg-gradient-to-br from-blue-50 to-pink-100 flex">
      <div className="flex-1 p-6 sm:p-10">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className=" text-2l leading-4 sm:text-4xl font-bold font-primary text-gray-800">
            Dashboard{" "}
            <span className="text-primary sm:border-none border border-neutral-600 bg-white sm:bg-transparent sm:shadow-none sm:drop-shadow-none drop-shadow-lg shadow-2xl sm:text-black">
              {" "}
              Overview
            </span>
          </h1>

          {/* Profile Dropdown */}
          <div ref={dropdownRef} className="relative">
            <div
              className="flex sm:flex-row flex-col justify-center items-center sm:gap-3 relative left-4 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={userinfo?.image}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <div className="text-sm ">
                <p className="font-semibold leading-4 text-center text-gray-700 font-ubuntu">
                  {userinfo?.username}
                </p>
              </div>
              <ChevronDown className="text-gray-600 sm:block hidden" />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg z-50">
                <ul className="py-2 text-gray-700">
                  <li>
                    <button
                      onClick={() => navigate("/dashbord/profile")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 font-primary"
                    >
                      <User size={18} /> Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-500 font-primary"
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
          <div className="bg-white h-25  sm:h-53 border border-gray-200 rounded-xl shadow-md hover:shadow-xl sm:p-6 transition duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="sm:static relative sm:text-xl text-sm top-1 sm:mx-1 mx-3 font-semibold text-gray-700">
                Total Posts
              </h2>
              <MdPostAdd size={28} className="text-blue-500 mx-3 " />
            </div>
            <p className="sm:text-4xl sm:static absolute top-33.5  left-50 font-bold text-blue-600">
              {blogs.length}
            </p>
            <p className=" sm:text-sm text-[11px] text-center sm:text-left text-gray-500 mt-1 font-ubuntu">
              Updated just now
            </p>
            <button
              onClick={() => navigate("/dashbord/admin-view-post")}
              className="sm:mt-4 sm:w-full w-25 h-6 sm:h-10.5 sm:static relative left-16 cursor-pointer text-center bg-blue-100 text-blue-700 sm:py-2   rounded-2xl sm:rounded-md hover:bg-blue-200 transition font-primary"
            >
              View Posts
            </button>
          </div>

          {/* Card 2: Authors */}
          <div className="bg-white h-25  sm:h-53 border border-gray-200 rounded-xl shadow-md hover:shadow-xl sm:p-6 transition duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="sm:static relative sm:text-xl text-sm top-1 sm:mx-1 mx-3 font-semibold text-gray-700">Authors</h2>
              <AiOutlineUsergroupAdd size={28} className="text-orange-500" />
            </div>
            <p className="sm:text-4xl sm:static absolute top-65  left-50 font-bold text-orange-500">
              {userData?.length}
            </p>
            <p className=" sm:text-sm text-[11px] text-center sm:text-left text-gray-500 mt-1 font-ubuntu">
              Active this week
            </p>
            <button
              disabled={!role || role === "editor"}
              onClick={() =>
                role === "admin" && navigate("/dashbord/view-author-list")
              }
              className="sm:mt-4 sm:w-full w-25 h-6 sm:h-10.5 sm:static relative left-16 cursor-pointer text-center bg-orange-100 text-orange-600 sm:py-2   rounded-2xl sm:rounded-md hover:bg-blue-200 transition font-primary"
            >
              View Users
            </button>
          </div>

          {/* Card 3: Site Views */}
          <div className="bg-white h-25  sm:h-53 border border-gray-200 rounded-xl shadow-md hover:shadow-xl sm:p-6 transition duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="sm:static relative sm:text-xl text-sm top-1 sm:mx-1 mx-3 font-semibold text-gray-700">
                Site Views
              </h2>
              <span className="text-purple-600 text-2xl font-bold">📈</span>
            </div>
            <p className="sm:text-4xl sm:static absolute top-96  left-50 font-bold text-purple-600">3.4K</p>
            <p className=" sm:text-sm text-[11px] text-center sm:text-left text-gray-500 mt-1 font-ubuntu">
              Last 7 days
            </p>
            <button className="sm:mt-4 sm:w-full w-25 h-6 sm:h-10.5 sm:static relative left-16 cursor-pointer text-center bg-purple-100 text-purple-700 sm:py-2   rounded-2xl sm:rounded-md hover:bg-blue-200 transition font-primary">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
