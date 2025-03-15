// AdminProfile.jsx
import React, { useContext } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { AuthContext } from "../../context/authContext";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigaite = useNavigate()
  const avatar =
    "https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/473402618_1317270199580736_2652709947685588980_n.jpg?ccb=11-4&oh=01_Q5AaIbau7BThPDJcgc1M8LI97iGPx7Wblm5JXUywOymzVll0&oe=67DED6CC&_nc_sid=5e03e0&_nc_cat=102";
  const { user,userData } = useContext(AuthContext);
  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* Avatar */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt={user.displayName}
                src={user.photoURL || avatar}
                sx={{ width: 100, height: 100 }}
              />
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {user.displayName || "Admin User"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Email: {user.email}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              UID: {user.uid}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Role: {user.role || "Administrator"}
            </Typography>

            {/* Edit Button */}
            <Box mt={2}>
              <Button onClick={()=> navigaite(`/dashbord/edit-profile/${user.uid}`)} variant="contained" startIcon={<Edit />}>
                Edit Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Profile;
