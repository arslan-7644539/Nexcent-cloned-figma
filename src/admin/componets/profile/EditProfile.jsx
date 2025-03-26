import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router";
import { AuthContext } from "../../../context/authContext";
import BackButton from "../buttons/BackButton";
import { BiHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const EditProfile = () => {
  // ------------------------
  const [userId, setUserId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // -------------------------------------------
  const { uid } = useParams();
  // console.log("🚀 ~ EditProfile ~ uid:", uid);
  // -----------------------------------------------
  const { userData, profileUpdate, profileUpdateLoading } =
    useContext(AuthContext);
  // console.log("🚀 ~ EditProfile ~ userData:", userData);
  // ------------------------------------------------------
  const [updatedData, setUpdatedData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  console.log("🚀 ~ EditProfile ~ updatedData:", updatedData);

  const handleChang = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUser = () => {
      if (!userData || userData.length === 0) return;

      try {
        const singleUser = userData.find((item) => item.id === uid);
        // console.log("🚀 ~ fetchUser ~ singleUser:", singleUser);
        if (singleUser) {
          setUserId(singleUser.uid);
          setUpdatedData({
            username: singleUser.username,
            email: singleUser.email,
            password: singleUser.password,
            image: singleUser.image,
          });
        }
      } catch (error) {
        console.error(error);
        alert("something went wrong please try again");
      }
    };
    fetchUser();
  }, [userData]);

  return (
    <div className=" container mx-auto h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-pink-100 py-16 px-6 md:px-20">
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-row justify-between items-baseline py-5 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#4D4D4D] mb-4">
            Edit Your Profile
          </h2>
          <div className="top-1.5">
            <BackButton />
          </div>
        </div>
        <p className="text-[#717171] text-lg md:text-xl mb-8 text-center ">
          Please fill the form below to edit your profile .
        </p>

        <form className="space-y-5 text-left max-w-md mx-auto">
          {/* Username Field */}
          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Username
            </label>
            <input
              autoComplete="username"
              type="text"
              name="username"
              value={updatedData.username}
              onChange={handleChang}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Email
            </label>
            <input
              autoComplete="email"
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleChang}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
          </div>

          {/* Password Field */}
          <div className="relative w-full">
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Password
            </label>
            <input
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={updatedData.password}
              onChange={handleChang}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
            {/* Toggle Eye Icon */}
            <div
              className="absolute top-13.5 right-4 sm:right-3 transform -translate-y-1/2 text-xl sm:text-lg text-gray-500 cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <FaEye />}
            </div>
          </div>

          {/* Image url field */}

          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Image
            </label>
            <input
              autoComplete="username"
              type="text"
              name="image"
              value={updatedData.image}
              onChange={handleChang}
              placeholder="Enter your Image ( Url Only )"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
          </div>

          <button
            disabled={profileUpdateLoading}
            onClick={(e) => {
              e.preventDefault();
              profileUpdate(userId, updatedData, setUpdatedData);
            }}
            className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#3a9e3e] transition duration-300"
          >
            {profileUpdateLoading ? <LinearProgress /> : "   Update"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProfile;
