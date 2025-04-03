import React, { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { auth, fireDB } from "../../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import BackButton from "../componets/buttons/BackButton";
import { BiHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";

const AddAuthors = () => {
  const { userData } = useContext(AuthContext);
  // ----------------------------------  exist admin info fetching
  const [adminInfo, setAdminInfo] = useState({
    adminEmail: "",
    adminPassword: "",
  });
  const currentAdmin = auth?.currentUser;

  useEffect(() => {
    const fetchAdminInfo = () => {
      try {
        if (!userData || !adminInfo) return;
        const existingAdmin = userData?.find(
          (u) => u?.email === currentAdmin?.email
        );
        if (existingAdmin)
          setAdminInfo({
            adminEmail: existingAdmin?.email,
            adminPassword: existingAdmin?.password,
          });
      } catch (error) {
        console.log("🚀 ~ fetchAdminInfo ~ error:", error);
      }
    };
    fetchAdminInfo();
  }, [userData, adminInfo?.adminEmail, adminInfo?.adminPassword]);
  // -----------------------------------

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const authorSchema = yup.object({
    username: yup.string().required("username is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    image: yup.string(),
    role: yup.string().required("role is required"),
    password: yup
      .string()
      .min(6, "password must be a 6 characters")
      .required("password is required"),
  });

  const authorForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      image: "",
      role: "",
      password: "",
    },
    validationSchema: authorSchema,
    onSubmit: async (values, actions) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        // ---------------------------------

        await setDoc(doc(fireDB, "users", user.uid), {
          username: values?.username,
          email: values?.email,
          image: values?.image,
          role: values?.role,
          password: values?.password,
          uid: user?.uid,
          createdAt: Timestamp.now(),
        });

        // await signOut(auth);
        if (currentAdmin) {
          await signInWithEmailAndPassword(
            auth,
            adminInfo?.adminEmail,
            adminInfo?.adminPassword
          );
          // await updateCurrentUser(auth, currentAdmin);
        }
        enqueueSnackbar("New Author Added Successfully", {
          variant: "success",
        });
        actions.resetForm();
        setTimeout(() => {
          navigate("/dashbord");
        }, 1000);
      } catch (error) {
        console.error(error);
        enqueueSnackbar("Someting went wrong", { variant: "info" });
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

  // const { userData } = useContext(AuthContext);
  // if (userData?.role === "editor") {
  //   alert("permission denied");
  //   return;
  // }

  return (
    <>
      <div className=" container mx-auto  flex justify-center items-center bg-gradient-to-br from-blue-50 to-pink-100 py-16 px-6 md:px-20 ">
        <motion.div
          className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-row justify-between items-center mb-3    ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4D4D4D] mb-4">
              Create New Author
            </h2>
            <BackButton />
          </div>
          <p className="text-[#717171] text-lg md:text-xl mb-6">
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

            {/* User Image Field */}
            <div>
              <label className="block mb-1 text-[#4D4D4D] font-semibold">
                Your Image
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                name="image"
                value={values.image}
                onChange={handleChange}
                placeholder="Enter your image (Url only)"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
              />
              {touched.image && errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>

            {/* User Role Field */}
            <FormControl
              fullWidth
              margin="normal"
              error={touched?.role && Boolean(errors?.role)}
            >
              <InputLabel> Select Role</InputLabel>
              <Select
                label="Author Role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
              </Select>
            </FormControl>

            {/* Password Field */}
            <div className="relative">
              <label className="block mb-1 text-[#4D4D4D] font-semibold">
                Password
              </label>
              <input
                autoComplete="new-password"
                onBlur={handleBlur}
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="   w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
              />
              {/* Toggle Eye Icon */}
              <div
                className="absolute top-13.5 right-4 sm:right-3 transform -translate-y-1/2 text-xl sm:text-lg text-gray-500 cursor-pointer z-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide /> : <FaEye />}
              </div>
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
    </>
  );
};

export default AddAuthors;
