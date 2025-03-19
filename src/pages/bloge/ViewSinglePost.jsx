import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";

const ViewSinglePost = () => {
  const avatar =
    "https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/473402618_1317270199580736_2652709947685588980_n.jpg?ccb=11-4&oh=01_Q5AaIbau7BThPDJcgc1M8LI97iGPx7Wblm5JXUywOymzVll0&oe=67DED6CC&_nc_sid=5e03e0&_nc_cat=102";

  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
    image: "",
    content: "",
  });

  const { blogs, blogsFetchingLoading } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = () => {
      if (!blogs || blogs.length === 0) return;
      const signlePost = blogs.find((item) => item.id === id);
      if (signlePost) {
        setPostId(signlePost.id);
        setPost({
          title: signlePost.title,
          description: signlePost.description,
          tags: signlePost.tags,
          image: signlePost.image,
          content: signlePost.content,
        });
      }
    };
    fetchSinglePost();
  }, [id, blogs]);

  if (blogsFetchingLoading) {
    return (
      <div className="flex justify-center items-center max-w-5xl mx-auto px-6 py-12">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={avatar}
          alt="Author"
          className="w-12 h-12 rounded-full shadow"
        />
        <div>
          <p className="text-sm font-medium text-gray-700">By Admin</p>
          <p className="text-xs text-gray-400">Published on March 18, 2025</p>
        </div>
      </div>

      {/* Cover Image */}
      <div className="mb-8">
        <img
          src={post.image}
          alt="Cover"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post?.tags?.split(",").map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium"
          >
            #{tag.trim()}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        className="prose prose-lg prose-blue max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share Buttons */}
      <div className="flex gap-4 mb-16">
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
          Share on Facebook
        </button>
        <button className="px-5 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-full transition">
          Share on Twitter
        </button>
      </div>

      {/* Comments Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
        <h2 className="text-2xl font-semibold mb-3">Comments</h2>
        <p className="text-gray-500 italic">Comments system coming soon...</p>
      </div>

      {/* Related Posts */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="p-5 bg-white border rounded-xl shadow hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-semibold text-xl mb-2">
                {i === 0
                  ? "10 React Tips for Beginners"
                  : "Understanding JSX in Depth"}
              </h3>
              <p className="text-gray-500 text-sm">
                {i === 0 ? "March 1, 2025" : "February 20, 2025"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewSinglePost;
