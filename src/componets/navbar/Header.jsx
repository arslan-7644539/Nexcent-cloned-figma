import React from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router";
import { motion } from "motion/react";
// import { NavLink } from "react-router";

const Header = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? "text-primary font-bold text-underline"
      : "text-secondary";
  };
  return (
    <div className=" container mx-auto w-full h-[89.76px] bg-white flex items-center shadow-md px-[100.23px] py-[11.14px] justify-between relative">
      {/* Logo */}
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        src={Logo}
        alt="Logo"
        className="h-[25.71px] w-[107.52px]"
      />

      {/* Navigation Menu */}
      <motion.nav 
       initial={{y:-100, opacity:0}} 
       animate={{y:0,opacity:1}}
       transition={{
         duration:0.5,
         ease:"easeOut"
       }}
      className="flex items-center  gap-[22px]">
        <div className="flex gap-[16px]">
          <motion.NavLink
            className={`text-secondary drop-shadow-sm ${activeLink} font-medium text-[15.14px] hover:underline`}
            to="/"
          >
            Home
          </motion.NavLink>
          <motion.NavLink
            className={`text-secondary drop-shadow-sm ${activeLink} font-medium text-[15.14px] hover:underline`}
            to="#"
          >
            Feature
          </motion.NavLink>
          <motion.NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Community
          </motion.NavLink>
          <motion.NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Blog
          </motion.NavLink>
          <motion.NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Pricing
          </motion.NavLink>
        </div>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="w-[140.25px] text-white h-[40.49px] flex items-center justify-center gap-[5.57px] px-[9.74px] py-[5px] cursor-pointer rounded-[2.78px] bg-primary  hover:bg-green-800 transition shadow-[0_4px_6px_rgba(0,0,0,0.5)] "
        >
          Register Now
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Header;
