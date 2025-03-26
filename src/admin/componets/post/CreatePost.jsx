// components/AddPost.jsx
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { lazy, useContext, useEffect, useRef, useState } from "react";
import { fireDB } from "../../../firebase";
import { AuthContext } from "../../../context/authContext";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";
import BackButton from "../buttons/BackButton";
import { useNavigate } from "react-router";
const JoditEditor = lazy(() => import("jodit-react"));

const AddPost = () => {
  // ------------------
  const editor = useRef(null);
  // -------------------------
  const navigate = useNavigate();
  // -------------------------------------
  const { enqueueSnackbar } = useSnackbar();
  // ---------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  // --------------------------------------------------
  const { user, userData } = useContext(AuthContext);
  // -------------------------------------------------

  const [post, setPost] = useState({
    title: "",
    tags: "",
    image: "",
    content: "",
    description: "",
    author: "",
    authorImage: "",
  });
  // -----------------------------------
  useEffect(() => {
    const fetchAuthorData = () => {
      try {
        const currentUser = userData?.find((u) => u?.uid === user?.uid);
        // console.log("🚀 ~ fetchUserData ~ currentUser:", currentUser);
        if (currentUser) {
          setPost({
            author: currentUser?.username,
            authorImage: currentUser?.image,
          });
          console.log("🚀 ~ fetchUserData ~ authorImage:", authorImage);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthorData();
  }, [userData, user]);

  // ------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addDoc(collection(fireDB, "posts"), {
        title: post.title,
        tags: post.tags,
        image: post.image,
        content: post.content,
        createdAt: Timestamp.now(),
        author: post.author,
        authorImage: post.authorImage,
        description: post.description,
      });
      setPost({
        title: "",
        description: "",
        tags: "",
        image: "",
        content: "",
        author: "",
        authorImage: "",
      });
      enqueueSnackbar("✅ Post created successfully!", { variant: "success" });
      setIsLoading(false);
      navigate("/dashbord");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-100 px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            📝 Add New Post
          </h2>
          <BackButton />
        </div>

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

          {/* Author Name */}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              name="author"
              value={post.author}
              onChange={handleChange}
              placeholder="Author Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Content
            </label>
            <JoditEditor
              ref={editor}
              value={post.content}
              onChange={(newContent) =>
                setPost({ ...post, content: newContent })
              }
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
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Featured Image
            </label>
            <input
              value={post.image}
              type="text"
              name="image"
              placeholder="Enter Image URL ( Only )"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded-lg transition font-medium"
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Publish Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
