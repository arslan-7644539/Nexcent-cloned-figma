import React from "react";

import Icon1 from "../../../assets/icon1.1.svg";
import Icon3 from "../../../assets/icon1.3.svg";
import Icon4 from "../../../assets/icon1.4.svg";
import AnimatedCounter from "../../../componets/animatedCounter/AnimatedCounter";


const AchivementSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 py-16 px-6 bg-[#F5F7FA]">
      {/* Section Heading */}
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-4xl md:text-6xl font-semibold leading-tight">
          Helping a local
        </p>
        <p className="text-4xl md:text-6xl font-semibold text-primary leading-tight">
          business reinvent itself
        </p>
        <p className="text-lg md:text-2xl font-medium text-gray-600 mt-4">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
        <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Icon1} alt="icon" className="w-14 h-14" />
          <div>
            <h3 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={2245341} duration={3} />
            </h3>
            <p className="text-base font-semibold text-gray-500">Members</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Icon3} alt="icon" className="w-14 h-14" />
          <div>
            <h3 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={46328} duration={2.5} />
            </h3>
            <p className="text-base font-semibold text-gray-500">Clubs</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Icon3} alt="icon" className="w-14 h-14" />
          <div>
            <h3 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={828867} duration={3} />
            </h3>
            <p className="text-base font-semibold text-gray-500">
              Event Bookings
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md">
          <img src={Icon4} alt="icon" className="w-14 h-14" />
          <div>
            <h3 className="text-4xl font-bold">
              <AnimatedCounter from={0} to={1926436} duration={3} />
            </h3>
            <p className="text-base font-semibold text-gray-500">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchivementSection;
