import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion, useAnimation } from "motion/react"; // Correct the import from "motion/react"
import { useAuth } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ChevronDown, LogOut, User } from "lucide-react";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const control = useAnimation();
  // -------------------------------
  const [userImage, setUserImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const { user, userData } = useAuth();
  const location = useLocation();
  const { pathname } = location;

  // Handling scroll direction and animating header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "down" && lastScrollY > 100) {
      control.start({ y: "-100%", opacity: 0 });
    } else {
      control.start({ y: "0%", opacity: 1 });
    }
  }, [scrollDirection, lastScrollY, control]);

  // Fetching user image from user data
  useEffect(() => {
    const fetchUserData = () => {
      try {
        const singleUser = userData.find((u) => u.uid === user?.uid);
        if (singleUser) {
          setUserImage(singleUser?.image);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    if (user && userData) {
      fetchUserData();
    }
  }, [user, userData]);

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

  // Active link styles
  const activeLink = ({ isActive, to }) => {
    const isNestedActive = to !== "/" && pathname.startsWith(to);
    return isActive || isNestedActive
      ? "text-primary font-bold underline"
      : "text-secondary drop-shadow-sm font-medium text-[15.14px] hover:underline";
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={control}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="container fixed top-0 mx-auto w-full backdrop-blur-lg shadow-lg p-4 transition-all duration-300 z-50 h-[89.76px] bg-white flex items-center px-[100.23px] py-[11.14px] justify-between"
    >
      {/* Logo */}
      <motion.div
        animate={{ scale: lastScrollY > 50 ? 0.85 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={Logo} alt="Logo" className="h-[25.71px] w-[107.52px]" />
      </motion.div>

      {/* Navigation */}
      <nav className="flex items-center gap-[22px]">
        <div className="flex gap-[16px]">
          <NavLink
            to="/"
            className={(props) => activeLink({ ...props, to: "/" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(props) => activeLink({ ...props, to: "/about" })}
          >
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className={(props) => activeLink({ ...props, to: "/contact-us" })}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/blog-Post"
            className={(props) => activeLink({ ...props, to: "/blog-post" })}
          >
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
                src={userImage}
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
                      onClick={() => navigate("/dashboard")}
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
      </nav>
    </motion.div>
  );
};

export default Header;
