import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../../firebase";
import { AuthContext } from "../../../context/authContext";
import { Link, useNavigate } from "react-router";
import { LinearProgress } from "@mui/material";
import BackButton from "../buttons/BackButton";
// apna firebase config yahan import karo

const AdminViewPost = () => {
  //   const navigate = useNavigate();
  const { blogs, deletePost, blogsFetchingLoading } = useContext(AuthContext);

  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl font-bold mb-4">📋 All Blog Posts</h2>
          <BackButton />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((post) => (
                <tr key={post.id} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={post.imageURL}
                      alt={post.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    {post.title}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {post.createdAt?.seconds
                      ? new Date(
                          post.createdAt.seconds * 1000
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <Link to={`/dashbord/edit-post/${post.id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-3 py-1 rounded text-sm">
                        Edit
                      </button>
                    </Link>
                    {/* ------------- */}
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 cursor-pointer rounded text-sm"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* ------------------------------------------------------------------------- */}
              {blogs.length < 1 ? (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-6">
                    <h3 className="text-center text-2xl font-bold">
                      {" "}
                      No posts found.
                    </h3>
                  </td>
                </tr>
              ) : (
                blogsFetchingLoading && (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-6">
                      <LinearProgress />
                    </td>
                  </tr>
                )
              )}
              {/* ------------------------------------------------------------------------------- */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewPost;
