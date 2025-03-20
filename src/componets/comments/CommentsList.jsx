import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireDB } from "../../firebase";

const CommentsList = ({ postId }) => {
  // ------------------------------
  const [comments, setComments] = useState([]);
  // ---------------------------------------------
  

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
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        {comments.length} Comments
      </h3>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-4 border border-gray-200 rounded p-4 shadow-sm"
        >
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span>👤 {comment.name}</span>
            <span>
              📅{" "}
              {comment?.createdAt?.seconds
                ? new Date(comment.createdAt.seconds * 1000).toLocaleString()
                : "Just now"}
            </span>
          </div>
          <p className="text-gray-800">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
