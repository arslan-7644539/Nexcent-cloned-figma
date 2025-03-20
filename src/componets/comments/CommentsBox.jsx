import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { fireDB } from "../../firebase";
import CommentsList from "./CommentsList";

const CommentsBox = ({ postId, title }) => {
  // ----------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  //   -------------------------------------------------------
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //   ---------------------------------------------------------------------------

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !commentText.trim()) {
      return alert("Please fill in all fields ");
    }
    if (!isValidEmail(email)) {
      return alert("Please enter a valid email address");
    }
    try {
      const commentRef = collection(fireDB, "blogs", postId, "comments");
      await addDoc(commentRef, {
        name,
        title: title,
        email,
        text: commentText,
        createdAt: serverTimestamp(),
      });
      setName("");
      setEmail("");
      setCommentText("");
    } catch (error) {
      console.error("something went wrong", error);
    }
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Leave a Comment</h2>

      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      {/* Show Comments */}
      <CommentsList postId={postId} />
    </div>
  );
};

export default CommentsBox;
