// components/BlogList.jsx
import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { TbLogs } from "react-icons/tb";
import { auth, fireDB } from "../../firebase";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router";

const BlogPost = () => {
  const navigate = useNavigate();
  const { blogs, blogsFetchingLoading } = useContext(AuthContext);

  if (blogsFetchingLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  return (
    <section className=" container mx-auto min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center flex flex-row justify-center gap-2">
          <TbLogs /> <span> Latest Blogs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                onClick={() => navigate(`/single-post/${blog.id}`)}
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3
                  onClick={() => navigate(`/single-post/${blog.id}`)}
                  className="text-xl font-semibold text-gray-800 cursor-pointer mb-2"
                >
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {blog.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>👤 {blog.author}</span>
                  <span>
                    📅{" "}
                    {new Date(blog.createdAt.seconds * 1000).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
