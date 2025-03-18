import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router";

const ViewSinglePost = () => {
  // ----------------------------------
  const avatar =
    "https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/473402618_1317270199580736_2652709947685588980_n.jpg?ccb=11-4&oh=01_Q5AaIbau7BThPDJcgc1M8LI97iGPx7Wblm5JXUywOymzVll0&oe=67DED6CC&_nc_sid=5e03e0&_nc_cat=102";

  const [postId, setPostId] = useState(null);
  console.log("🚀 ~ ViewSinglePost ~ postId:", postId);

  const [post, setPost] = useState({
    title: "",
    description: "",
    tags: "",
  });

  //   console.log("🚀 ~ ViewSinglePost ~ post:", post);
  const { blogs } = useContext(AuthContext);
  //   console.log("🚀 ~ ViewSinglePost ~ blogs:", blogs);
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
        });
      }
    };
    fetchSinglePost();
  }, [id, blogs]);

  //   const post = {
  //     title: "How to Learn React.js in 2025",
  //     slug: "how-to-learn-react-js-in-2025",
  //     author: {
  //       name: "Ali Khan",
  //       avatar: "https://i.pravatar.cc/100?img=3",
  //     },
  //     publishedAt: "March 18, 2025",
  //     readTime: "6 min read",
  //     coverImage: "https://source.unsplash.com/800x400/?technology,code",
  //     tags: ["React", "JavaScript", "Frontend"],
  //     content: `
  //       <p>React.js is a powerful library for building UIs. It lets you build complex apps with minimal code.</p>
  //       <h2>Why Learn React?</h2>
  //       <p>Because it's in high demand, backed by Facebook, and has a rich ecosystem.</p>
  //       <h2>Getting Started</h2>
  //       <p>You can start with Create React App or Vite...</p>
  //     `,
  //   };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold line-clamp-2 mb-4">{post.title}</h1>

      {/* Author & Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
        <img
          src={avatar}
          //   alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        {/* <span>By {post.author.name}</span>
        <span>• {post.publishedAt}</span>
        <span>• {post.readTime}</span> */}
      </div>

      {/* Cover Image */}
      <img
        src={post.image}
        alt="Cover"
        className="rounded-xl w-full mb-6 shadow-lg"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {/* {post?.tags?.map((tag) => ( */}
        <span
          // key={tag}
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
        >
          #React_js
        </span>
        {/* ))} */}
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />

      {/* Share Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Share on Facebook
        </button>
        <button className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-500 transition">
          Share on Twitter
        </button>
      </div>

      {/* Comments Section (placeholder) */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <p className="text-gray-500 italic">Comments system coming soon...</p>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              10 React Tips for Beginners
            </h3>
            <p className="text-gray-500 text-sm">March 1, 2025</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Understanding JSX in Depth
            </h3>
            <p className="text-gray-500 text-sm">February 20, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSinglePost;
