// components/AddPost.jsx
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { auth, fireDB } from "../../../firebase";
import { AuthContext } from "../../../context/authContext";
// import { progress } from "motion";
import CircularProgress from "@mui/material/CircularProgress";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddPost = () => {
  // const storage = getStorage();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
    // image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === "image") {
    //   setPost({ ...post, image: files[0] });
    // } else {
      setPost({ ...post, [name]: value });
    // }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      // let imageUrl = "";
      // if (post.image) {
      //   const storageRef = await ref(
      //     storage,
      //     `post-images/${Date.now()}-${post.image.name}`
      //   );
      //   const snapShot = await uploadBytes(storageRef, post.image);
      //   imageUrl = await getDownloadURL(snapShot.ref);
      // }

      await addDoc(collection(fireDB, "posts"), {
        title: post.description,
        description: post.description,
        tags: post.tags,
        // image: imageUrl,
        createdAt: Timestamp.now(),
        author: user.displayName,
      });
      setPost({ title: "", description: "", tags: "", image: null });
      alert("✅ Post created successfully!");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          📝 Add New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={post.title}
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
              value={post.description}
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
              value={post.tags}
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
              disabled={isLoading}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-medium"
            >
              {isLoading ? <CircularProgress /> : "  Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
