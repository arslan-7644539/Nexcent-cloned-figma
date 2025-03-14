// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fireDB } from "../firebase"; // your firebase.js path
// import { User } from "lucide-react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ------------------------------------
  const navigate = useNavigate();

  // post-update
  const [postUpdateLoading, setPostUpdateLoading] = useState(false);

  const postUpdate = async (postId, updatedData, setUpdatedPost) => {
    setPostUpdateLoading(true);
    try {
      const updateRef = doc(fireDB, "posts", postId);
      await updateDoc(updateRef, updatedData);
      alert("Updated successfuly");
      setPostUpdateLoading(false);
      setUpdatedPost({
        title: "",
        description: "",
        tags: "",
        // image: null,
      });
      setTimeout(() => {
        navigate("/dashbord/admin-view-post");
      }, 1000);
    } catch (error) {
      console.error(error);
      setPostUpdateLoading(false);
    }
  };

  // user-profile-update
  const [profileUpdateLoading, setProfileUpdateLoading] = useState(false);

  const profileUpdate = async (userId, updatedData, setUpdatedData) => {
    setProfileUpdateLoading(true);
    try {
      const profileRef = doc(fireDB, "users", userId);
      await updateDoc(profileRef, updatedData);
      alert("profile update successfully");
      setProfileUpdateLoading(false);
      setUpdatedData({
        username: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/dashbord");
      }, 1000);
    } catch (error) {
      console.error(error);
      setProfileUpdateLoading(false);
    }
  };

  // post-delete
  const deletePost = async (postId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this post"
      );
      if (confirm) {
        await deleteDoc(doc(fireDB, "posts", postId));
        alert("post delete Successfuly");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // fetching blogs
  const [blogsFetchingLoading, setBlogsFetchingLoading] = useState(false);

  const [blogs, setBlogs] = useState([]);

  console.log("🚀 ~ BlogPost ~ blogs:", blogs);

  const fetchBlogs = async () => {
    setBlogsFetchingLoading(true);
    try {
      const querySnapshot = await getDocs(collection(fireDB, "posts"));
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(postData);
      setBlogsFetchingLoading(false);
    } catch (error) {
      console.error(error);
      blogsFetchingLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  // user Data fetching from firestor
  const [userData, setUserData] = useState(null);
  console.log("🚀 ~ AuthProvider ~ userData:", userData);

  const fetchUserData = async () => {
    try {
      const userQuery = await getDocs(collection(fireDB, "users"));
      const usersData = userQuery.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(usersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // user authenticatiion
  const [user, setUser] = useState(null);
  console.log("🚀 ~ AuthProvider ~ user:", user);
  const [loading, setLoading] = useState(true); // optional for loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // console.log(User);

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        blogsFetchingLoading,
        blogs,
        deletePost,
        postUpdate,
        postUpdateLoading,
        userData,
        profileUpdate,
        profileUpdateLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
