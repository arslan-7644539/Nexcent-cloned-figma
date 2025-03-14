import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { CircularProgress, LinearProgress } from "@mui/material";
import { progress } from "motion";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  const { user, loading } = useAuth();
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-4xl">
        <CircularProgress />
      </div>
    );

  return <div>{user ? children : navigate("/login")}</div>;
};

export default AuthGuard;
