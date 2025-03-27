import React from "react";
import { auth, fireDB } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserRole = () => {
  const getUserRole = async () => {
    if (!auth?.currentUser?.uid) return null;
    const userRef = doc(fireDB, "users", auth?.currentUser?.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data().role;
    } else {
      return null;
    }
  };

  return getUserRole();
};

export default UserRole;
