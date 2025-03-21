import React from "react";
import Icon1 from "../../../assets/icon1.1.svg";

import Icon3 from "../../../assets/icon1.3.svg";
import Icon4 from "../../../assets/icon1.4.svg";

const AchivementSection = () => {
  return (
    <div className=" container mx-auto relative flex flex-row items-center  space-x-2  my-[33px] bg-[#F5F7FA] py-12 px-6">
      {/* Section Heading */}
      <div className="  text-center mb-8 flex flex-col items-start ml-45 md:w-1/2">
        <p className=" text-center text-6xl font-semibold">Helping a local</p>
        <p className="text-6xl font-semibold text-primary">
          business reinvent itself
        </p>
        <p className=" text-2xl font-medium text-gray-600 mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Stats Section */}
      <div className=" flex flex-col gap-9 w-1/2">
        <div className="flex flex-row   gap-12">
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="icon" className="w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold">2,245,341</h3>
              <p className="text-sm font-semibold text-gray-400">Members</p>
            </div>
          </div>

          {/* Stat Box 2 */}
          <div className="flex items-center space-x-4">
            <img src={Icon3} alt="icon" className="w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold">46,328</h3>
              <p className="text-sm font-semibold text-gray-400">Clubs</p>
            </div>
          </div>
        </div>
        {/* -------------------- */}
        <div className="flex flex-row gap-12">
          {/* Stat Box 3 */}
          <div className="flex items-center space-x-4">
            <img src={Icon3} alt="icon" className="w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold">828,867</h3>
              <p className="text-sm font-semibold text-gray-400">
                Event Bookings
              </p>
            </div>
          </div>

          {/* Stat Box 4 */}
          <div className="flex items-center space-x-4">
            <img src={Icon4} alt="icon" className="w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold">1,926,436</h3>
              <p className="text-sm font-semibold text-gray-400">Payments</p>
            </div>
          </div>
          {/* -------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AchivementSection;
