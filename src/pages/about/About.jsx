import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              About Our Blog
            </span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our blogging hub! 🎉 Here, we dive deep into web
            development, share the latest tech trends, coding tips, and
            real-world guides to help developers and creators grow their skills
            and stay inspired.
          </p>

          <p className="text-md text-gray-600">
            Our goal is simple — to build a strong community of learners,
            creators, and tech lovers who believe in the power of sharing
            knowledge.
          </p>

          <div>
            <button
              onClick={() => navigate("/blog-Post")}
              className="bg-primary hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
            >
              Read Our Blog
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-445.jpg?t=st=1710927339~exp=1710930939~hmac=a570ee49854699f57dbd2b69362eaec13f9339d0ad6e917eaccb4a8ec99a2a52&w=826"
            alt="Blogging Illustration"
            className="rounded-2xl shadow-xl w-full max-h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
