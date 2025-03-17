// components/AddPost.jsx
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, fireDB } from "../../../firebase";
import { AuthContext } from "../../../context/authContext";
// import { progress } from "motion";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EditPost = () => {
  // const storage = getStorage();
  //   const [isLoading, setIsLoading] = useState(false);
  const { postUpdateLoading, postUpdate, blogs } = useContext(AuthContext);
  const [postId, setPostId] = useState(null);
  // console.log("🚀 ~ EditPost ~ postId:", postId);
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    description: "",
    tags: "",
    // image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setUpdatedPost({ ...updatedPost, image: files[0] });
    } else {
      setUpdatedPost({ ...updatedPost, [name]: value });
    }
  };

  //   ------------------------------------
  const { id } = useParams();
  // -----------------------
  useEffect(() => {
    const fetchPost = () => {
      if (!blogs || blogs.length === 0) return;
      try {
        const singlePost = blogs.find((item) => item.id === id);
        if (singlePost) {
          setPostId(singlePost.id);
          setUpdatedPost({
            title: singlePost.title,
            description: singlePost.description,
            tags: singlePost.tags,
            // image: singlePost.image,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id, blogs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          📝 Edit Post
        </h2>

        <form className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={updatedPost.title}
              onChange={handleChange}
              placeholder="Enter title..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={updatedPost.description}
              onChange={handleChange}
              placeholder="Write something..."
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tags (comma separated)
            </label>
            <input
              type="text"
              name="tags"
              value={updatedPost.tags}
              onChange={handleChange}
              placeholder="e.g. tech, coding, javascript"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          {/* <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Image (optional)
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="block w-full text-gray-600"
            />
          </div> */}

          {/* Submit Button */}
          <div className="text-right">
            <button
              disabled={postUpdateLoading}
              onClick={(e) => {
                e.preventDefault();
                postUpdate(postId, updatedPost,setUpdatedPost);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-medium"
            >
              {postUpdateLoading ? <CircularProgress size={24} /> : "  Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
