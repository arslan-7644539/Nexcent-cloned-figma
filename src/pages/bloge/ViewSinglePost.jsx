import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import CommentsBox from "../../componets/comments/CommentsBox";
import CommentsList from "../../componets/comments/CommentsList";

const ViewSinglePost = () => {
  //  ---------------------------

  const [postId, setPostId] = useState("");
  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
    image: "",
    content: "",
    createdAt: "",
    author: "",
    authorImage: "",
  });

  const { blogs, blogsFetchingLoading } = useContext(AuthContext);

  // -----------------------------------------------------------------------

  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = () => {
      if (!blogs || blogs.length === 0) return;
      const signlePost = blogs.find((item) => item.id === id);
      if (signlePost) {
        setPostId(signlePost?.id);
        setPost({
          title: signlePost?.title,
          description: signlePost?.description,
          tags: signlePost?.tags,
          image: signlePost?.image,
          content: signlePost?.content,
          createdAt: signlePost?.createdAt,
          author: signlePost?.author,
          authorImage: signlePost?.authorImage,
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
  // --------------------
  const currentPostUrl = window.location.href;
  const text = "Check out this awesome post";

  const handleFBShear = () => {
    const fbShear = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentPostUrl
    )}`;
    // console.log("🚀 ~ handleFBShear ~ fbShear:", fbShear);
    window.open(fbShear, "_blank");
  };

  const handleShearTwitter = () => {
    const tShear = `https://x.com/intent/tweet?url=${encodeURIComponent(
      currentPostUrl
    )}&text=${encodeURIComponent(text)}`;
    window.open(tShear, "_blank");
  };
  // -----------------------------------------------------------------------------------------

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Cover Image */}
      <div className="mb-2 py-0 px-6 flex items-center justify-center">
        <img
          src={post?.image}
          alt="Cover"
          className="w-[664px] h-[332px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={post.authorImage}
          alt="Author"
          className="w-12 h-12 rounded-full shadow"
        />
        <div>
          <p className="text-sm font-medium text-gray-700">
             {`${post.author}`}
          </p>
          <p className="text-xs text-gray-400">
            Published on :{" "}
            {new Date(post?.createdAt?.seconds * 1000).toLocaleDateString()}
          </p>
        </div>
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
        <button
          onClick={handleFBShear}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          Share on Facebook
        </button>
        <button
          onClick={handleShearTwitter}
          className="px-5 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-full transition"
        >
          Share on Twitter
        </button>
      </div>

      {/* Related Posts */}
      <div className="my-10 ">
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

      {/* Comments Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-16">
        <h2 className="text-2xl font-semibold mb-3">Comments</h2>
        {/* <p className="text-gray-500 italic">Comments system coming soon...</p> */}
        <CommentsBox title={post.title} postId={postId} />
      </div>
    </div>
  );
};

export default ViewSinglePost;
