import { useLocation, useNavigate } from "react-router";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NotFound = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="text-center p-6">
          <Typography variant="h1" className="font-bold text-blue-600 mb-4">
            404
          </Typography>
          <Typography variant="h5" className="text-gray-700 mb-2">
            Page Not Found
          </Typography>
          <Typography variant="body1" className="text-gray-600 mb-6">
            The page you are looking for might have been removed or does not
            exist. <code> {location?.pathname} </code>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="rounded-full px-6 py-2 text-white"
            onClick={() => (userData ? navigate("/dashbord") : navigate("/"))}
          >
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
