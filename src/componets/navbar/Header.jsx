// import React from "react";
// import Logo from "../../assets/Logo.png";
// import btn from "../../assets/Button.png";

// const Header = () => {
//   return (
//     <div className=" w-full h-[58.76px] bg-white flex items-center shadow-md px-[100.23px] py-[11.14px]  gap-[43px] justify-evenly">
//       {/* Logo */}
//       <img
//         src={Logo}
//         alt="Logo"
//         className=" absolute flex flex-row gap-[5.57px] h-[16.71px] w-[107.52px] opacity-100 left-[100.23px] top-[21.03px] "
//       />

//       {/* Navigation Menu */}
//       <nav className="relative max-w-[650.48px] h-[36.49px] gap-[22.27px] flex flex-row  items-center left-[251.62px] top-[11.14px] opacity-100  ">
//         <div className="w-auto max-w-[307.82px] h-[17px] left-[187.13px] top-[9.74px]  flex flex-row items-center justify-between gap-[16.71px]">
//           <a
//             className="w-[71px] h-auto  max-h-[17px] font-medium text-secondary hover:underline  leading-[16.7px] text-[11.14px]   "
//             href="#"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="w-[71px] h-auto  max-h-[17px] font-medium text-secondary hover:underline  leading-[16.7px] text-[11.14px]   "
//           >
//             Feature
//           </a>
//           <a
//             href="#"
//             className="w-[71px] h-auto  max-h-[17px] font-medium text-secondary hover:underline  leading-[16.7px] text-[11.14px]   "
//           >
//             Community
//           </a>
//           <a
//             href="#"
//             className="w-[71px] h-auto  max-h-[17px] font-medium text-secondary hover:underline  leading-[16.7px] text-[11.14px]   "
//           >
//             Blog
//           </a>
//           <a
//             href="#"
//             className="w-[71px] h-auto  max-h-[17px] font-medium text-secondary hover:underline  leading-[16.7px] text-[11.14px]   "
//           >
//             Pricing
//           </a>
//         </div>
//         <button className="w-[133.25px]  cursor-pointer h-[36.49px] flex flex-row justify-center gap-[5.57px] py-[22.27] px-[9.74] rounded-[2.78px] bg-[#4CAF4F]">
//           <img src={btn} alt="" />
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router";
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
      <img src={Logo} alt="Logo" className="h-[25.71px] w-[107.52px]" />

      {/* Navigation Menu */}
      <nav className="flex items-center  gap-[22px]">
        <div className="flex gap-[16px]">
          <NavLink
            className={`text-secondary drop-shadow-sm ${activeLink} font-medium text-[15.14px] hover:underline`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`text-secondary drop-shadow-sm ${activeLink} font-medium text-[15.14px] hover:underline`}
            to="#"
          >
            Feature
          </NavLink>
          <NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Community
          </NavLink>
          <NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Blog
          </NavLink>
          <NavLink
            className="text-secondary drop-shadow-sm  font-medium text-[15.14px] hover:underline"
            to="#"
          >
            Pricing
          </NavLink>
        </div>
        <button className="w-[140.25px] text-white h-[40.49px] flex items-center justify-center gap-[5.57px] px-[9.74px] py-[5px] cursor-pointer rounded-[2.78px] bg-primary  hover:bg-green-800 transition shadow-[0_4px_6px_rgba(0,0,0,0.5)] ">
          Register Now
        </button>
      </nav>
    </div>
  );
};

export default Header;
