import React, { useState } from "react";
import { motion } from "motion/react"; // Make sure you installed framer-motion
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
   const navigate = useNavigate()
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
    onSubmit: async (values, actions) => {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = res.user;
        alert("Login Successfully");
        actions.resetForm();
        navigate("/")
      } catch (error) {
        console.error("login errer : ", error);
      } finally {
        actions.setSubmitting(false);
      }
    },
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
        <Link
          to="/register"
          className="text-[#4CAF4F] font-medium hover:underline"
        >
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
          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Password
            </label>
            <input
            autoComplete="current-password"
              onBlur={handleBlur}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
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
            {isSubmitting ? "Logging in..." : " Login Now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
