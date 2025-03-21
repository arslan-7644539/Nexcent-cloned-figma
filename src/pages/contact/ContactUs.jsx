import React from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase";
import { useSnackbar } from "notistack";
import { LinearProgress } from "@mui/material";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  // -----------------
  const contactSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, actions) => {
      try {
        await addDoc(collection(fireDB, "feedbacks"), {
          name: values.name,
          email: values.email,
          message: values.message,
          createdAt: Timestamp.now(),
        });
        enqueueSnackbar("✅ Your Feedback Submited Successfully!", {
          variant: "success",
        });
        actions.resetForm();
      } catch (error) {
        console.error("contact form error:", error);
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
  } = contactForm;
  return (
    <section className=" container mx-auto bg-white py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions, feedback, or just want to say hello? Drop us a
            message and we'll get back to you as soon as we can!
          </p>
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Email:</strong> NexcentCorporaiton@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +92 300 1234567
            </p>
            <p>
              <strong>Location:</strong> Faisalabad, Pakistan
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors?.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                placeholder="Email Address"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors?.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Enter Your Message"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
                name="message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors?.message}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {isSubmitting ? <LinearProgress /> : "  Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
