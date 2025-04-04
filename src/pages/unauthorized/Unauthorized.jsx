import { useNavigate } from "react-router";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import UserRole from "../../admin/componets/userRole/UserRole";

const Unauthorized = () => {
  // const {userData} = useContext(AuthContext)
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    UserRole().then((userRole) => {
      setRole(userRole);
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full  max-w-md shadow-lg rounded-2xl">
        <CardContent className="text-center p-6">
          <Typography variant="h4" className="font-bold text-red-600 mb-4">
            Access Denied 🚫
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-6">
            You do not have permission to view this page. If you believe this is
            an error, please contact the administrator.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="rounded-full px-6 py-2 text-white"
            onClick={() => (role ? navigate("/dashbord") : navigate("/"))}
          >
            Go back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;
