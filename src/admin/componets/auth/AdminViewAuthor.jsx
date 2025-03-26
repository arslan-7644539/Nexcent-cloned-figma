import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { LinearProgress } from "@mui/material";
import BackButton from "../buttons/BackButton";

const AdminViewAuthor = () => {
  //   const navigate = useNavigate();
  const { userData, deleteUser, usersLoading } = useContext(AuthContext);
  console.log("🚀 ~ AdminViewAuthor ~ userData:", userData);

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl font-bold mb-4">📋 Author List</h2>
          <BackButton />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  UserName
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={user?.image || "user"}
                      alt={user?.username || "userName"}
                      className="w-20 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    {user?.username}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {user?.createdAt?.seconds
                      ? new Date(
                          user?.createdAt.seconds * 1000
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {/* ------------- */}
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 cursor-pointer rounded text-sm"
                      onClick={() => deleteUser(user?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {userData?.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-6">
                    Author not found
                  </td>
                </tr>
              )}

              {usersLoading && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-6">
                    <LinearProgress />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewAuthor;
