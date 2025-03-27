import React, { useEffect, useState } from "react";
import UserRole from "./UserRole";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children, allowedRole }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    UserRole().then((usersRole) => {
      setRole(usersRole);
      setLoading(false);
    });
  }, []);
  return allowedRole.includes(role) ? children : navigate("/unauthorized");
};

export default PrivateRoute;
