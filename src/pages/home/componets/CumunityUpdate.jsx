import React from "react";
import Image18 from "../../../assets/image18.svg";
import Image19 from "../../../assets/image19.svg";
import Image20 from "../../../assets/image20.svg";
import {motion} from "motion/react"
import { FaLongArrowAltRight } from "react-icons/fa";

 const CumunityUpdate = () => {

   

  const cumunityData = [
    {
      image: Image18,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: Image19,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: Image20,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <>
      <div className=" container  mx-auto top-[2111.13px] w-[1002.34px] h-[354.51px] flex flex-col items-center m-auto my-20 gap-[11.14px]  ">
        <div className="left-[114.85px] w-[722.64px] h-[87.57px] flex flex-col items-center gap-[5.57px] ">
          <h3 className="w-[772.64px] h-[31px] font-semibold text-[25.6px] leading-[30.6px] text-center ">
            Caring is the new marketing
          </h3>
          <p className=" left-[167.57px] top-[36.57px] w-[437.13px] h-[51px] font-medium text-[11.14px] leading-[16.7px] max-w-lg text-center text-[#89939E]">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>
        <div className="top-[98.71px] w-[1002.34px] h-[255.8px] flex flex-row   justify-between items-center px-[100.23px] mr-26 ">
          {cumunityData.map((item, index) => (
            <div
              key={index}
              className="relative shadow-[0_2px_3px_rgba(0,0,0,0.3)]  overflow-hidden left-[100.23px] w-[256.15px] h-[255.8px] flex flex-col items-center gap-[-66.82px] "
            >
              <img
                src={item.image}
                alt="image"
                className="w-[256.15px] h-[199.08px] rounded-[5.57px] shadow-md "
              />
              <div className=" absolute left-[17.75px]  top-[132.25px] w-[220.65px] h-[123.55px] flex flex-col items-center gap-[11.14px] px-[11.14px] py-[11.14px] rounded-[5.57px] bg-[#F5F7FA] shadow-md  ">
                <p className="left-[11.14px] top-[11.14px] w-[198.38px] h-[59px] text-center font-semibold text-[13.92px] leading-[19.5px] text-[#89939E] ">
                  {item.title}{" "}
                </p>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="left-[11.14px] text-primary  cursor-pointer hover:text-green-800 transition  top-[81.27px] w-[198.38px] h-[31.14px] flex flex-row justify-center gap-[5.57px] px-[5.57px] py-[5.57px]  "
                >
                  <span> Read More</span>
                  <FaLongArrowAltRight className=" mt-1" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CumunityUpdate;
