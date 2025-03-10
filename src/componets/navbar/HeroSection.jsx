import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import illustration from "../../assets/Illustration.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import rafikiLogo from "../../assets/rafiki.svg";
import Icon1 from "../../assets/icon1.1.svg";
import Icon2 from "../../assets/icon1.2.svg";
import Icon3 from "../../assets/icon1.3.svg";
import Icon4 from "../../assets/icon1.4.svg";
import mobileLogo from "../../assets/pana.svg";
import Image18 from "../../assets/image18.svg";
import Image19 from "../../assets/image19.svg";
import Image20 from "../../assets/image20.svg";
import { motion, useScroll } from "motion/react";

const clientsLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

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

const ClientsSection = () => (
  <div className=" container mx-auto flex flex-col items-center gap-3 py-16 ">
    <h3 className="text-4xl font-bold text-secondary [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] ">
      Our Clients
    </h3>
    <p className="text-sm text-gray-600 [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
      We have been working with some Fortune 500+ clients
    </p>
    <div className="flex space-x-45">
      {clientsLogos.map((logo, index) => (
        // <div className="flex flex-row gap-14">
        <img
          key={index}
          src={logo}
          alt="Client Logo"
          className="w-10 h-10 rounded-md shadow-md"
        />
        // </div>
      ))}
    </div>
  </div>
);

const CommunitySection = () => (
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

const UnlockSection = () => (
  <>
    <div className=" container mx-auto w-[1002.34px] h-[301.4px] flex flex-col  md:flex-row items-center py-[100.23px] mx-auto ">
      {/* ------------- */}
      <div className="w-1/2">
        <div className=" w-[307.66px] h-[301.4px] ">
          <img
            src={rafikiLogo}
            alt="logo"
            className="top-[36.2px] w-[307.34px] h-[229px] "
          />
        </div>
      </div>
      {/* --------------- */}
      <div className="w-1/2">
        <div className="left-[442px] top-[56.75px] w-[660.1px] h-[187.9px] flex flex-col justify-start ">
          <div className="w-[418.34px] h-[129.14px] flex flex-col items-start gap-[11.14px] ">
            <h3 className=" text-justify leading-relaxed  max-w-xs break-words text-xl font-bold ">
              The unseen of spending three <span>years at Pixelgrade</span>
            </h3>
            <p className=" top-[73.14px] w-[418.34px] max-w-lg text-justify md:h-[56px] h-auto font-normal text-[11.74px] leading-[13.9px] text-[#89939E]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          {/* ---- */}
          <button className="top-[151.41px] mt-5 text-white bg-primary hover:bg-green-800 transition w-[105.55px] h-[36.49px] shadow-[0_4px_6px_rgba(0,0,0,0.5)]  cursor-pointer flex flex-row justify-center gap-[6.96px]  px-[22.27px] py-[9.74px] rounded-[2.78px]  ">
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

const AchivementSection = () => (
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
          <img src={icon3} alt="icon" className="w-12 h-12" />
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

const CalenderSection = () => (
  <>
    <div className=" container mx-auto top-[571.16px]  w-[1002.34px] h-[301.68px] ">
      <div className=" w-full h-auto  flex flex-row  justify-evenly gap-96 my-20 items-center px-[100.23px] ">
        <img
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
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
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

const CumunityUpdate = () => (
  <>
    <div className=" container  mx-auto top-[2111.13px] w-[1002.34px] h-[354.51px] flex flex-col items-center m-auto my-20 gap-[11.14px]  ">
      <div className="left-[114.85px] w-[722.64px] h-[87.57px] flex flex-col items-center gap-[5.57px] ">
        <h3 className="w-[772.64px] h-[31px] font-semibold text-[25.6px] leading-[30.6px] text-center ">
          Caring is the new marketing
        </h3>
        <p className=" left-[167.57px] top-[36.57px] w-[437.13px] h-[51px] font-medium text-[11.14px] leading-[16.7px] max-w-lg text-center text-[#89939E]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
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
              <button className="left-[11.14px] text-primary  cursor-pointer hover:text-green-800 transition  top-[81.27px] w-[198.38px] h-[31.14px] flex flex-row justify-center gap-[5.57px] px-[5.57px] py-[5.57px]  ">
                <span> Read More</span>
                <FaLongArrowAltRight className=" mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
      
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 py-20 px-8 bg-[#F5F7FA] shadow-md ">
        {/* Left Content */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" ml-40 w-full md:w-1/2 flex flex-col items-start gap-5"
        >
          <h3 className="text-7xl font-bold text-secondary">
            Lessons and insights <br />
            <span className="text-primary">from 8 years</span>
          </h3>
          <p className="text-sm text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-24 h-10 bg-primary shadow-[0_4px_6px_rgba(0,0,0,0.5)]  text-white rounded-md  hover:bg-green-800 transition">
            Register
          </button>
        </motion.div>

        {/* Right Image */}
        <div className=" w-full md:w-1/3 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            src={illustration}
            alt="Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* --------------------------------------------------- */}

      {/* Clients Section */}
      <ClientsSection />

      {/* Community Section */}
      <CommunitySection />

      {/* unlock section */}
      <UnlockSection />

      {/* Achivement Section */}
      <AchivementSection />

      {/* CalenderSection */}
      <CalenderSection />

      {/* CumunityUpdate */}
      <CumunityUpdate />
      {/* ------------------------------------------- */}
    </>
  );
};

export default HeroSection;
