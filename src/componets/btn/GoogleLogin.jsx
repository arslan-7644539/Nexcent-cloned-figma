import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, GoogleProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { LogOut } from "lucide-react";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      setUser(result?.user); // ✅ Ensure we store result.user only
      console.log("🚀 ~ loginWithGoogle ~ user:", result.user);
    } catch (error) {
      console.log("Google Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-4">
      {user ? (
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="h-16 w-16 rounded-full border-2 border-blue-500"
          />
          <h3 className="text-lg font-semibold mt-2">{user?.displayName}</h3>
          <button
            onClick={handleLogout}
            className="mt-3 px-4 py-2 flex items-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={loginWithGoogle}
          className="px-4 py-2 flex items-center gap-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          <FcGoogle size={20} /> Login with Google
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;
