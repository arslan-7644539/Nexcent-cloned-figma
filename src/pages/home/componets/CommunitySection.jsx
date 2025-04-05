import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
// import CumunityUpdate from "./CumunityUpdate";
import { motion, useInView } from "motion/react";

const CommunitySection = () => {
  const { ref, inview } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const memberData = [
    {
      icon: icon1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className=" container mx-auto flex flex-col items-center gap-1.5 md:gap-3 py-16">
      <h3 className="md:text-3xl text-2xl md:font-bold font-semibold  text-secondary text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] ">
        Manage your entire community <br />
        <span>in a single system</span>
      </h3>
      <p className="text-sm text-gray-600 underline  mb-[11.14px]">
        Who is Nextcent suitable for?
      </p>

      <div className="flex md:flex-wrap md:flex-row flex-col justify-center gap-6">
        {memberData.map((item, index) => (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              // boxShadow: "0px 20px 50px rgba(40, 203, 139, 1)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            key={index}
            className="md:w-80 md:h-80 w-70 h-25 hover:shadow-xl flex flex-col  items-center p-4  box-border drop-shadow-sm  bg-white"
          >
            <img
              src={item.icon}
              alt="icon"
              className="md:w-12 md:h-12 w-8 h-8"
            />
            <h3 className="md:text-xl text-sm font-semibold text-center text-gray-800">
              {item.title}
            </h3>
            <p className="md:text-sm text-[10px] text-gray-500 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
