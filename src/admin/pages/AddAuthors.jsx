import React from "react";
import { motion } from "motion/react";
import * as yup from "yup";
import { useFormik } from "formik";
import { LinearProgress } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";

const AddAuthors = () => {
  const navigate = useNavigate();

  const authorSchema = yup.object({
    username: yup.string().required("username is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup
      .string()
      .min(6, "password must be a 6 characters")
      .required("password is required"),
  });

  const authorForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: authorSchema,
    onSubmit: async (values, actions) => {
      try {
        const userCrenditional = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCrenditional.user;
        // ---------------------------------

        await setDoc(doc(fireDB, "users", user.uid), {
          username: values.username,
          email: values.email,
          password: values.password,
          uid: user.uid,
          createdAt: Timestamp.now(),
        });
        alert("New Author Added Successfully");
        actions.resetForm();
        // setTimeout(() => {
        //   navigate("/dashbord");
        // }, 1000);
      } catch (error) {
        console.error(error);
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
  } = authorForm;

  return (
    <div className=" container mx-auto h-screen flex justify-center items-center bg-[#F5F7FA] py-16 px-6 md:px-20">
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D] mb-4">
          Create New Author
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

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#3a9e3e] transition duration-300"
          >
            {isSubmitting ? <LinearProgress /> : "   Add now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddAuthors;
