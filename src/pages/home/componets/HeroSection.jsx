import React, { lazy, Suspense } from "react";

import illustration from "../../../assets/Illustration.png";

import { motion, useScroll } from "motion/react";

const ClientsSection = lazy(() => import("./ClientsSection"));
const CommunitySection = lazy(() => import("./CommunitySection"));
const UnlockSection = lazy(() => import("./UnlockSection"));
const AchivementSection = lazy(() => import("./AchivementSection"));
const CalenderSection = lazy(() => import("./CalenderSection"));
const CumunityUpdate = lazy(() => import("./CumunityUpdate"));

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
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
      <div>
        <Suspense fallback={<p> loading... </p>}>
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
        </Suspense>
      </div>
      {/* ------------------------------------------- */}
    </>
  );
};

export default HeroSection;
