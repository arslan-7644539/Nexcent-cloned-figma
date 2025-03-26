// context/AuthContext.jsx
import { createContext, lazy, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fireDB } from "../firebase"; // your firebase.js path
// import { User } from "lucide-react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
// const useSnackbar = lazy(() => import("notistack"));

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ------------------------------------
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // fetch user feedback

  const [feedbacks, setFeedbacks] = useState([]);
  const [fbLoading, setFBLoading] = useState(true);

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
      setFBLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setFBLoading(false);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);


  // delete user feedback

  const deleteFB = async (fbId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this FB"
      );
      if (confirm) {
        await deleteDoc(doc(fireDB, "feedbacks", fbId));
        enqueueSnackbar("FB delete Successfuly", { variant: "success" });
        setFeedbacks((prevFB) =>
          prevFB.filter((fb) => fb?.id !== fbId)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // post-update
  const [postUpdateLoading, setPostUpdateLoading] = useState(false);

  const postUpdate = async (postId, updatedData, setUpdatedPost) => {
    setPostUpdateLoading(true);
    try {
      const updateRef = doc(fireDB, "posts", postId);
      await updateDoc(updateRef, updatedData);
      enqueueSnackbar("Updated successfuly", { variant: "success" });
      setPostUpdateLoading(false);
      setUpdatedPost({
        title: "",
        description: "",
        tags: "",
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
      setProfileUpdateLoading(false);
      setUpdatedData({
        username: "",
        email: "",
        password: "",
        image: "",
      });
      // enqueueSnackbar("Login Successfully", {
      //   variant: "success",
      // });
      alert("Profile Updated");
      setTimeout(() => {
        navigate("/dashbord");
      }, 1000);
    } catch (error) {
      console.error(error);
      setProfileUpdateLoading(false);
      enqueueSnackbar("Failed to update profile", { variant: "error" });
    }
  };

  // fetching blogs
  const [blogsFetchingLoading, setBlogsFetchingLoading] = useState(false);

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogsFetchingLoading(true);
    try {
      const postRef = collection(fireDB, "posts");
      const q = query(postRef, orderBy("createdAt", "desc"));
      // -------------------
      const querySnapshot = await getDocs(q);
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(postData);
      setBlogsFetchingLoading(false);
    } catch (error) {
      console.error(error);
      setBlogsFetchingLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  // post-delete
  const deletePost = async (postId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this post"
      );
      if (confirm) {
        await deleteDoc(doc(fireDB, "posts", postId));
        enqueueSnackbar("post delete Successfuly", { variant: "success" });
        setBlogs((prevPost) => prevPost?.filter((post) => post?.id !== postId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // user Data fetching from firestor
  const [userData, setUserData] = useState(null);
  const [usersLoading, setusersLoading] = useState(false);
  // console.log("🚀 ~ AuthProvider ~ userData:", userData);

  const fetchUserData = async () => {
    setusersLoading(true);
    try {
      const userQuery = await getDocs(collection(fireDB, "users"));
      const usersData = userQuery.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(usersData);
      setusersLoading(false);
    } catch (error) {
      console.error(error);
      setusersLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // delete-user
  const deleteUser = async (userId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this user"
      );
      if (confirm) {
        await deleteDoc(doc(fireDB, "users", userId));
        enqueueSnackbar("user delete Successfuly", { variant: "success" });
        setUserData((prevUser) =>
          prevUser.filter((user) => user?.id !== userId)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // user authenticatiion
  const [user, setUser] = useState(null);
  // console.log("🚀 ~ AuthProvider ~ user:", user);
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
        // -----------------------
        blogsFetchingLoading,
        blogs,
        deletePost,
        postUpdate,
        postUpdateLoading,
        // -----------------------
        userData,
        usersLoading,
        deleteUser,
        // -----------------------
        profileUpdate,
        profileUpdateLoading,
        // -----------------------
        feedbacks,
        fbLoading,
        deleteFB,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
