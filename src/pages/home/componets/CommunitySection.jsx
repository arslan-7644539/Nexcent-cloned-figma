import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import CumunityUpdate from "./CumunityUpdate";

const CommunitySection = () => {
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
    <div className=" container mx-auto flex flex-col items-center gap-3 py-16">
      <h3 className="text-3xl font-bold text-secondary text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] ">
        Manage your entire community <br />
        <span>in a single system</span>
      </h3>
      <p className="text-sm text-gray-600  mb-[11.14px]">
        Who is Nextcent suitable for?
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {memberData.map((item, index) => (
          <div
            key={index}
            className="w-60 flex flex-col items-center p-4  box-border drop-shadow-sm  bg-white"
          >
            <img src={item.icon} alt="icon" className="w-12 h-12" />
            <h3 className="text-lg font-bold text-center">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
