import React from "react";
import {motion} from "motion/react"
import mobileLogo from "../../../assets/pana.svg";

 const CalenderSection = () => {
    
  return (
    <>
      <div className=" container mx-auto top-[571.16px]  w-[1002.34px] h-[301.68px] ">
        <div className=" w-full h-auto  flex flex-row  justify-evenly gap-96 my-20 items-center px-[100.23px] ">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={mobileLogo}
            alt="logo"
            className="w-[307.34px] h-[301.68px]"
          />
          <div className=" left-[442px] top-[42.89px] w-[460.1px] h-[215.9px] flex flex-col items-start gap-[22.27px] ">
            <div className="w-[418.34px] h-[157.14px] flex flex-col items-start gap-[11.14px] ">
              <h3 className="w-[418.34px] h-[62px] font-bold text-[25.06px] leading-[30.6px]  text-[#263238] text-justify max-w-xs  ">
                How to design your site footer like we did
              </h3>
              <p className="top-[73.14px] w-[418.34px] h-[84px] font-medium text-[11.74px] leading-[13.9px]  text-[#89939E] max-w-lg text-justify">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <button className=" top-[179.41px] shadow-[0_4px_6px_rgba(0,0,0,0.5)]   w-[110.55px] h-[40.39px] text-center hover:bg-green-800 transition  bg-primary text-[#F5F7FA] font-medium  py-[9.74px] rounded-[2.78px]  ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default CalenderSection;
