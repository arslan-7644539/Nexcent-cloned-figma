import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  // --------------------------
  const regesterSchema = yup.object({
    username: yup.string().required("userName is required"),
    email: yup.string().email("Invalid Email").required("Email is requird"),
    password: yup
      .string()
      .min(6, " must be have 6 character ")
      .required("password is required"),
  });
  // ---------------------------------------

  const regForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: regesterSchema,
    onSubmit: async (values, actions) => {
      // e.preventDefault();
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = res.user;
        // console.log("🚀 ~ handleSubmit ~ user:", user);
        await setDoc(doc(fireDB, "users", user.uid), {
          uid: user.uid,
          username: values.username,
          email: values.email,
          createdAt: new Date(),
        });

        actions.resetForm();
        alert("Regester successfully");
        toast.success('Regestration Successfully"', {
          position: "top-right",
        });
        navigate("/login");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          console.error(error);
          toast.error("something went wrong", {
            position: "top-right",
          });
        }
        if (error.code === "auth/email-already-in-use") {
          actions.setFieldError("email", "This email is already registered");
        }
      } finally {
        actions.setSubmitting(false);
      }
    },
  });
  // console.log("🚀 ~ Register ~ regForm:", regForm);
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = regForm;

  const alredyHaveRegester = (
    <div className="text-center mt-4">
      <p className="text-[#717171] text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#4CAF4F] font-medium hover:underline"
        >
          Login here
        </Link>
      </p>
    </div>
  );

  return (
    <div className=" container mx-auto h-screen flex justify-center items-center bg-[#F5F7FA] py-16 px-6 md:px-20">
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D] mb-4">
          Create Your Account
        </h2>
        <p className="text-[#717171] text-lg md:text-xl mb-8">
          Please fill the form below to get started with our amazing platform.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-left max-w-md mx-auto"
        >
          {/* Username Field */}
          <div>
            <label className="block mb-1 text-[#4D4D4D] font-semibold">
              Username
            </label>
            <input
              onBlur={handleBlur}
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
            />
            {touched.username && errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

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
              autoComplete="new-password"
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

          {/* ------------------------------------ */}
          {alredyHaveRegester}
          {/* ------------------------------------ */}

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#3a9e3e] transition duration-300"
          >
            {isSubmitting ? "Registering" : " Register Now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
