// AdminProfile.jsx
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
} from "@mui/material";
import { AuthContext } from "../../context/authContext";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router";
import BackButton from "../componets/buttons/BackButton";

const Profile = () => {
  // ------------------
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    uid: "",
    image: "",
  });
  // console.log("🚀 ~ Profile ~ profileData:", profileData);
  // ---------------------
  const navigaite = useNavigate();
  // ----------------------------------

  const { user, userData, usersLoading } = useContext(AuthContext);
  // console.log("🚀 ~ Profile ~ userData:", userData);
  // console.log("🚀 ~ Profile ~ user:", user);
  // ----------------------------------------------------

  useEffect(() => {
    const fetchProfileData = () => {
      if (!userData || userData.length === 0) return;

      try {
        const currentUser = userData.find((u) => u.uid === user.uid);
        if (currentUser) {
          setProfileData({
            username: currentUser?.username,
            email: currentUser?.email,
            uid: currentUser?.uid,
            image: currentUser?.image,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  }, [user,userData]);

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
        {usersLoading ? (
          <LinearProgress />
        ) : (
          <Grid container spacing={2} alignItems="center">
            {/* Avatar */}
            <Grid item xs={12} sm={4}>
              <Box display="flex" justifyContent="center">
                <Avatar
                  alt={profileData.username}
                  src={profileData.image}
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
            </Grid>

            {/* Info */}
            <Grid item xs={12} sm={8}>
              <div className="flex flex-row justify-between items-baseline ">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {profileData.username || "Admin User"}
                </Typography>
                {/* ------------- back button */}
                <BackButton />
              </div>
              <Typography variant="body1" color="text.secondary">
                Email: {profileData.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                UID: {profileData.uid}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Role: {user.role || "Administrator"}
              </Typography>

              {/* Edit Button */}
              <Box mt={2}>
                <Button
                  onClick={() =>
                    navigaite(`/dashbord/edit-profile/${user?.uid}`)
                  }
                  variant="contained"
                  startIcon={<Edit />}
                >
                  Edit Profile
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default Profile;
