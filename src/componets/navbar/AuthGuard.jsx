import React, { Suspense } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { CircularProgress, LinearProgress } from "@mui/material";


const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  const { user, loading } = useAuth();
  if (loading)
    return (
      <Suspense>
        <div className="flex justify-center items-center h-screen text-4xl">
          <CircularProgress />
        </div>
      </Suspense>
    );

  return <div>{user ? children : navigate("/login")}</div>;
};

export default AuthGuard;
