import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useAuth } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ChevronDown, LogOut, User } from "lucide-react";

// ✅ Active Link Class Function
const activeLink = ({ isActive }) =>
  isActive
    ? "text-primary font-bold underline"
    : "text-secondary drop-shadow-sm font-medium text-[15.14px] hover:underline";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const { user } = useAuth();
  const navigate = useNavigate();

  // ✅ Close dropdown on outside click
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
    <div className="container mx-auto w-full h-[89.76px] bg-white flex items-center shadow-md px-[100.23px] py-[11.14px] justify-between relative">
      {/* Logo */}
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        src={Logo}
        alt="Logo"
        className="h-[25.71px] w-[107.52px]"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex items-center gap-[22px]"
      >
        <div className="flex gap-[16px]">
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className={activeLink}
            // className="text-secondary drop-shadow-sm font-medium text-[15.14px] hover:underline"
          >
            Contact Us
          </NavLink>
          <NavLink to="/blog-Post" className={activeLink}>
            Blog
          </NavLink>
        </div>

        {/* User Dropdown */}
        {user && (
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
              <p>{user.displayName}</p>
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
                    <button
                      onClick={() => navigate("/dashbord")}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <User size={18} /> Dashboard
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
        )}
      </motion.nav>
    </div>
  );
};

export default Header;
