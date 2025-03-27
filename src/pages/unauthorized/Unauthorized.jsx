import { useNavigate } from "react-router";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
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
            onClick={() => navigate("/dashbord")}
          >
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;
