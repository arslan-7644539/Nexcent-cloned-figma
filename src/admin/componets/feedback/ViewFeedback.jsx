import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { format } from "date-fns";
import { fireDB } from "../../../firebase";

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllFeedbacks = async () => {
    try {
      const q = query(
        collection(fireDB, "feedbacks"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const feedbackArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbackArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        📬 User Feedbacks
      </h2>

      {loading ? (
        <div className="text-center text-lg text-gray-500">
          Loading feedbacks...
        </div>
      ) : feedbacks.length === 0 ? (
        <div className="text-center text-gray-500">No feedbacks found.</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {feedbacks.map((fb, index) => (
                <tr key={fb.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {fb.name}
                  </td>
                  <td className="px-6 py-4 text-blue-600">{fb.email}</td>
                  <td className="px-6 py-4 text-gray-700 max-w-sm break-words">
                    {fb.message}
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {fb.createdAt?.seconds
                      ? format(new Date(fb.createdAt.seconds * 1000), "PPPpp")
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ViewFeedback;
