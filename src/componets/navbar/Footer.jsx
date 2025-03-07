import React from "react";
import { FaLocationArrow, FaLongArrowAltRight } from "react-icons/fa";
import footerIcon from "../../assets/FooterIcon.svg";
import pathIcon from "../../assets/path.svg";
import youtubeIcon from "../../assets/youtube.svg";
import twitterIcon from "../../assets/twitter.svg";
import instaIcon from "../../assets/insta.svg";

const Footer = () => {
  const Frame16 = () => (
    <div className=" container w-full max-w-[100%]  h-[209.31px] flex flex-col items-center gap-[22.27px] py-[22.27px] bg-[#F5F7FA] my-auto  mx-auto">
      <h2 className="left-[192.46px] space-x-2 top-[22.27px] w-full max-w-[617.46px] h-[106px] text-center font-bold text-[44.53px] leading-[52.9px] ">
        Pellentesque suscipit <br /> <span> fringilla libero eu.</span>
      </h2>
      <button className="left-[439.04px] cursor-pointer top-[150.55px] w-[124.25px] h-[36.39px] flex flex-row justify-center gap-[5.57px] px-[22.27px] py-[9.74px] rounded-[2.78px] bg-primary text-white shadow-[0_4px_6px_rgba(0,0,0,0.5)]  hover:bg-green-800 transition  ">
        <span className=" left-[22.27px] top-[9.74px] w-[63px] h-[17px] font-medium text-[11.60px] leading-[16.7px] text-center ">
          Get a Demo
        </span>

        <FaLongArrowAltRight className="left-[101.98px] top-[12.68px] w-[11px] h-[11p " />
      </button>
    </div>
  );

  const Footer = () => (
    <div className=" container w-full bg-[#263238] py-12 px-8 md:px-20">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="md:col-span-4 flex flex-col items-center gap-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src={footerIcon} alt="logo" className="w-8 h-6" />
            <h3 className="text-white text-3xl font-semibold">Nexcent</h3>
          </div>
          {/* Copyright */}
          <div className="text-justify flex flex-col gap-2 text-[#F5F7FA] text-sm">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4  ">
            <img
              className="w-6 cursor-pointer hover:border hover:border-amber-50 h-6"
              src={pathIcon}
              alt="logo"
            />
            <img
              className="w-6 cursor-pointer hover:border hover:border-amber-50 h-6"
              src={instaIcon}
              alt="logo"
            />
            <img
              className="w-6 cursor-pointer hover:border hover:border-amber-50 h-6"
              src={twitterIcon}
              alt="logo"
            />
            <img
              className="w-6 cursor-pointer hover:border hover:border-amber-50 h-6"
              src={youtubeIcon}
              alt="logo"
            />
          </div>
        </div>

        {/* Center Links */}
        <div className="md:col-span-4 flex flex-col md:flex-row gap-20 ml-50 ">
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="text-[#F5F7FA] space-y-2 text-sm ">
              <li className="hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="hover:underline">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:underline">
                <a href="#">Blogs</a>
              </li>
              <li className="hover:underline">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:underline">
                <a href="#">Testimonial</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="text-[#F5F7FA] space-y-2 text-sm">
              <li className="hover:underline">
                <a href="#">Help Center</a>
              </li>
              <li className="hover:underline">
                <a href="#">Terms of Service</a>
              </li>
              <li className="hover:underline">
                <a href="#">Legal</a>
              </li>
              <li className="hover:underline">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="hover:underline">
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h3 className="text-white font-semibold text-lg mb-6]">
            Stay up to date
          </h3>
          <div className="relative w-full max-w-[250px]">
            <input
              className="w-full h-10 bg-[#fafaff2c] text-white px-3 rounded-lg :outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:border text-white p-2 rounded-md">
              <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  //   const Footer = () => (
  //     <div className="top-[209.31px] w-full h-[229.21px] flex flex-row justify-start gap-[87.01px] px-[114.85px] py-[44.55px] bg-[#263238] ">
  //       <div className="grid md:grid-cols-12 ">
  //         {/* -------------- */}
  //         <div className="left-[114.85px] top-[44.55px] flex flex-col items-center gap-8 ">
  //           <div className="w-[132.95px] h-[20.65px] flex flex-row justify-center gap-[6.88px] ">
  //             {/* logo */}
  //             <img src={footerIcon} alt="logo" className="w-[30px] h-[21px]  " />
  //             <h3 className="text-white left-[37px] top-[1.44px] w-[95.94px] h-[18px]  ">
  //               Nexcent
  //             </h3>
  //           </div>
  //           <div className="top-[48.5px] w-[243.62px] h-[33.57px] flex flex-col items-center gap-[5.57px] ">
  //             <p className="w-[244px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] ">
  //               Copyright © 2020 Landify UI Kit.
  //             </p>
  //             <p className="w-[244px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA]  ">
  //               All rights reserved
  //             </p>
  //           </div>
  //           <div className="top-[109.91px] flex gap-3.5 justify-center items-center">
  //             <img className="w-[22px] h-[22px] " src={pathIcon} alt="logo" />
  //             <img className="w-[22px] h-[22px] " src={instaIcon} alt="logo" />
  //             <img className="w-[22px] h-[22px] " src={twitterIcon} alt="logo" />
  //             <img className="w-[22px] h-[22px] " src={youtubeIcon} alt="logo" />
  //           </div>
  //         </div>
  //         {/* --------- */}
  //         <div className="left-[445.48px] top-[44.55px] w-[442px] h-[140.12px] flex flex-row justify-start gap-[20.88px] col-span-4">
  //           {/* ============ */}
  //           <div className="w-[111.34px] h-[140.12px] flex flex-col items-start gap-[16.17px] ">
  //             <h3 className="w-[111px] h-[20px] font-semibold text-[13.92px] leading-[19.5px] text-center text-white">
  //               Company
  //             </h3>
  //             <div className=" top-[36.71px] w-[111.37px] h-[103.41px] flex flex-col items-start gap-[8.35px] ">
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 About Us
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] top-[44.71px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Contact Us
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Blogs
  //               </a>
  //               <a
  //                 className="w-[111px] top-[67.06px]  h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Pricing
  //               </a>
  //               <a
  //                 className="w-[111px] top-[89.41px]   h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Testimonial
  //               </a>
  //             </div>
  //           </div>
  //           {/* ============= */}
  //           <div>
  //             <h3 className="w-[111px] h-[20px] font-semibold text-[13.92px] leading-[19.5px] text-center text-white">
  //               Support
  //             </h3>
  //             <div className="  top-[36.71px] w-[111.37px] h-[103.41px] flex flex-col items-start gap-[8.35px] ">
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Help Center
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Terms of Service
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Legal
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Privacy Policy
  //               </a>
  //               <a
  //                 className="w-[111px] h-[14px] font-medium text-[9.74px] leading-[13.9px] text-center text-[#F5F7FA] "
  //                 href="#"
  //               >
  //                 Status
  //               </a>
  //             </div>
  //           </div>
  //           {/* ============= */}
  //           <div className="flex flex-col items-start gap-2">
  //             <h3 className="text-white font-semibold text-sm">
  //               Stay up to date
  //             </h3>
  //             <div className="relative w-full">
  //               <input
  //                 className="w-[177px] h-[28px] bg-[#F5F7FA]  text-black px-3 py-1 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
  //                 type="email"
  //                 placeholder="Your Email "
  //               />
  //               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded-md">
  //                 <FaLocationArrow className="right-1.5" />
  //               </button>
  //             </div>
  //           </div>

  //           {/* =============== */}
  //         </div>
  //         {/* ---------------------- */}
  //       </div>
  //     </div>
  //   );
  return (
    <>
      <div className=" container mx-auto top-[2608.87px] w-full h-[438.53px] flex flex-col items-start mt-[33px] ">
        <Frame16 />
        <Footer />
      </div>
    </>
  );
};

export default Footer;
