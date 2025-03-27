import React, { useCallback, useState } from "react";
import { motion } from "motion/react"; // Make sure you installed framer-motion
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { LinearProgress } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { useSnackbar } from "notistack";

const Login = () => {
  console.log(auth.currentUser);
  
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // -----------------------------
  const loginSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().min(6).required("password is required"),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: useCallback(async (values, actions) => {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = res.user;
        enqueueSnackbar("Login Successfully", {
          variant: "success",
        });
        actions.resetForm();
        navigate("/dashbord");
      } catch (error) {
        console.error("login errer : ", error);
        alert("Please fill a valid email & password");
      } finally {
        actions.setSubmitting(false);
      }
    }, []),
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = loginForm;
  // ------------------------------

  const dontHaveAccount = (
    <div className="text-center mt-4">
      <p className="text-[#717171] text-sm">
        Don't have an account?{" "}
        <Link to="#" className="text-[#4CAF4F] font-medium hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );

  return (
    <div className=" container mx-auto  h-screen bg-[#F5F7FA] py-16 px-6 md:px-20">
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D] mb-4">
          Welcome Back
        </h2>
        <p className="text-[#717171] text-lg md:text-xl mb-8">
          Login to access your account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-left max-w-md mx-auto"
        >
          {/* Email Field */}
          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Email
            </label>
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password Field */}

          <div className="relative w-full">
            {/* Label */}
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Password
            </label>

            {/* Input */}
            <input
              autoComplete="current-password"
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-14 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] text-base sm:text-sm"
            />

            {/* Toggle Eye Icon */}
            <div
              className="absolute top-13.5 right-4 sm:right-3 transform -translate-y-1/2 text-xl sm:text-lg text-gray-500 cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <FaEye />}
            </div>

            {/* Error */}
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {dontHaveAccount}
          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#3a9e3e] transition duration-300"
          >
            {isSubmitting ? <LinearProgress /> : " Login Now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
