import React from "react";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";
import logo7 from "../../../assets/logo7.png";
import { motion } from "motion/react";

const ClientsSection = () => {
  const clientsLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className=" container mx-auto flex flex-col items-center gap-3 py-16 ">
      <h3 className="text-4xl font-bold text-secondary [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] ">
        Our Clients
      </h3>
      <p className="text-sm text-gray-600 [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="relative overflow-hidden w-full">
        <motion.div
          animate={{
            x: "-100%", // Animate logos to move left
          }}
          transition={{
            x: {
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "loop", // Loop the animation continuously
              duration: 15, // Duration of one loop (adjust as needed)
              ease: "linear", // Make the scroll smooth and linear
            },
          }}
          className="flex space-x-45"
        >
          {clientsLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="w-10 h-10 rounded-md shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsSection;
