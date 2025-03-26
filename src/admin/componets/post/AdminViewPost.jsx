import React, { useContext } from "react";
import { Link } from "react-router";
import { LinearProgress } from "@mui/material";
import { AuthContext } from "../../../context/authContext";
import BackButton from "../buttons/BackButton";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const AdminViewPost = () => {
  const { blogs, deletePost, blogsFetchingLoading } = useContext(AuthContext);
  // console.log("🚀 ~ AdminViewPost ~ blogs:", blogs);

  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            📋 All Blog Posts
          </h2>
          <BackButton />
        </div>

        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Image</th>
                <th className="px-6 py-3 text-left font-semibold">Title</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((post) => (
                <tr
                  key={post?.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <img
                      src={post?.image}
                      alt={post?.title}
                      className="w-24 h-16 object-cover rounded shadow"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium line-clamp-2">
                    {post.title}
                  </td>
                  <td className="px-6 py-4">
                    {post.createdAt?.seconds
                      ? new Date(
                          post.createdAt.seconds * 1000
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Link to={`/dashbord/edit-post/${post.id}`}>
                        <button className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm shadow">
                          <FiEdit className="text-base" />
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => deletePost(post.id, )}
                        className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-sm shadow"
                      >
                        <FiTrash2 className="text-base" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* No posts found */}
              {blogs.length < 1 && !blogsFetchingLoading && (
                <tr>
                  <td colSpan="4" className="text-center py-12 text-gray-500">
                    <div className="text-xl font-semibold">No posts found</div>
                    <p className="text-sm mt-1">Start by adding a new post.</p>
                  </td>
                </tr>
              )}

              {/* Loading State */}
              {blogsFetchingLoading && (
                <tr>
                  <td colSpan="4">
                    <LinearProgress />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewPost;
