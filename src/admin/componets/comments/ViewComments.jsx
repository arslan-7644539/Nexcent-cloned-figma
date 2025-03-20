import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { fireDB } from "../../../firebase";
import { AuthContext } from "../../../context/authContext";

const ViewComments = () => {
  const { blogs } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  // console.log("🚀 ~ ViewComments ~ allComments:", allComments)
  const [loading, setLoading] = useState(true);
  const postId = blogs.id;
  // -------------------------------------------
  const fetchAllComments = async () => {
    setLoading(true);

    const blogsSnapshot = await getDocs(collection(fireDB, "blogs"));

    // const commentsList = [];

    const allCommentsPromises = blogsSnapshot.docs.map(async (blogDoc) => {
      const postId = blogDoc.id;
      const blogData = blogDoc.data();
      const postTitle = blogData.title || "Untitled Post";

      const commentsRef = collection(fireDB, "blogs", postId, "comments");
      const q = query(commentsRef, orderBy("createdAt", "desc"));
      const commentsSnapshot = await getDocs(q);

      const blogComments = commentsSnapshot.docs.map((commentDoc) => ({
        ...commentDoc.data(),
        commentId: commentDoc.id,
        blogId,
        postTitle,
      }));

      return blogComments;
    });

    // Wait for all blog comments to be fetched
    const resolvedComments = await Promise.all(allCommentsPromises);

    // Flatten the array of arrays
    const flatComments = resolvedComments.flat();

    setComments(flatComments);
    setLoading(false);
  };

  // ✅ Delete comment
  const handleDelete = async (blogId, commentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    try {
      const commentRef = doc(fireDB, "blogs", blogId, "comments", commentId);
      await deleteDoc(commentRef);
      fetchAllComments(); // Refresh after delete
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    fetchAllComments();
  }, []);

  useEffect(() => {
    if (!postId) return;
    const commentRef = collection(fireDB, "blogs", postId, "comments");
    const q = query(commentRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const commentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentData);
    });
    return () => unsub();
  }, [postId]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        🛠️ Admin - All Comments
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500">No comments found.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    📌 {comment.postTitle}
                  </h3>
                  <p className="text-sm text-gray-500">
                    👤 {comment.name} | 📧 {comment.email}
                  </p>
                  <p className="mt-2">{comment.text}</p>
                </div>
                <button
                  onClick={() =>
                    handleDelete(comment.blogId, comment.commentId)
                  }
                  className="ml-4 text-red-600 font-semibold hover:underline"
                >
                  ❌ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewComments;
