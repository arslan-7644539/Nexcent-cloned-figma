import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useAuth } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ChevronDown, LogOut, User } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  // -------android-nav------
  const [androidNav, setAndroidNav] = useState(false);

  // -------------------
  const location = useLocation();
  // console.log("🚀 ~ Header ~ location:", location);
  const { pathname } = location;
  // -----------------------------
  const { user, userData } = useAuth();
  // -----------------------------------------------
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUserData = () => {
      try {
        const singleUser = userData.find((u) => u.uid === user.uid);
        if (singleUser) {
          setUserImage(singleUser?.image);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [user, userData]);
  // ------------------------------------------------------

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // ✅ Active Link Class Function
  const activeLink = ({ isActive, to }) => {
    const isNestedActive = to !== "/" && pathname.startsWith(to);
    return isActive || isNestedActive
      ? "text-primary font-bold underline"
      : "text-secondary drop-shadow-sm font-medium text-[15.14px] hover:underline";
  };

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
  // ----------------------------------------------------------

  const mobileNav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog-Post" },
  ];

  return (
    <>
      {/* -----------------responsive navbar----------------- */}
      <div className="md:hidden block relative">
        {/* Hamburger Button */}
        <button
          onClick={() => setAndroidNav(!androidNav)}
          className="text-3xl p-3 fixed top-1.5 border border-neutral-600 right-4 z-50 bg-white  rounded-md shadow-lg"
        >
          <GiHamburgerMenu />
        </button>

        {/* Mobile Nav Menu */}
        {androidNav && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 z-40">
            <div className="absolute top-0 right-0 w-40 h-[40%] bg-white shadow-lg p-6 flex flex-col gap-4">
              {mobileNav.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav?.path}
                  onClick={() => setAndroidNav(false)}
                  className="text-lg font-medium font-primary text-neutral-800  hover:text-blue-600 transition-colors duration-200"
                >
                  {nav?.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* ------------ responsive navbar------------------------*/}
      <div className="container mx-auto max-w-full w-full md:h-[89.76px] bg-white flex items-center shadow-md px-[100.23px] py-[11.14px] justify-between  relative ">
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          src={Logo}
          alt="Logo"
          className="   md:static relative bottom-1 w-42 h-10 p-2 right-23"
        />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="md:flex items-center  hidden gap-[22px]"
        >
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
    </>
  );
};

export default Header;
