import React from "react";
import { motion } from "motion/react";
import rafikiLogo from "../../../assets/rafiki.svg";

const UnlockSection = () => {
  return (
    <>
      <div className="  container mx-auto  md:w-[1002.34px] md:h-[301.4px]
        flex flex-col   md:flex-row items-center py-[100.23px]  ">
        {/* ------------- */}
        <div className="md:w-1/2 w-full p-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="  md:w-[307.66px] md:h-[301.4px]  "
          >
            <img
              src={rafikiLogo}
              alt="logo"
              className="top-[36.2px] w-[307.34px] h-[229px] "
            />
          </motion.div>
        </div>
        {/* --------------- */}
        <div className="w-1/2 md:static relative right-17.5   ">
          <div className=" mx-[44.2.px] my-[56.75px] w-[760.1px] h-[287.9px] flex flex-col gap-19 justify-start ">
            <div className="w-[418.34px]  h-[129.14px] flex flex-col items-start gap-[11.14px] ">
              <h3 className=" md:text-justify  text-center leading-relaxed  max-w-xs break-words text-xl font-semibold md:font-bold font-primary ">
                The unseen of spending three <span>years at Pixelgrade  </span>
              </h3>
              <p className=" top-[73.14px] md:w-[418.34px] w-[75%]  md:max-w-lg  text-justify  md:h-[56px] font-normal text-[15.74px] leading-[20.9px] text-[#89939E] font-ubuntu  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            {/* ---- */}
            <button className="relative md:top-6 top-12 mt-5 text-white bg-primary hover:bg-green-800 transition w-[105.55px] h-[36.49px] shadow-[0_4px_6px_rgba(0,0,0,0.5)]  cursor-pointer flex flex-row justify-center gap-[6.96px]  px-[22.27px] py-[9.74px] rounded-[2.78px]  ">
              <span className="left-[22.27px] top-[9.74px] w-[61px] h-[17px] font-bold  text-[11.14px] leading-[16.7px] text-center">
                {" "}
                Learn More{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UnlockSection;
