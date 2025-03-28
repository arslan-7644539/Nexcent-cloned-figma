import { lazy, useContext } from "react";
// import { AuthContext } from "../../context/authContext";
import AuthGuard from "../../componets/navbar/AuthGuard";
import NavLayout from "../../admin/componets/adminNavbar/NavLayout";
import PrivateRoute from "../../admin/componets/userRole/PrivateRoute";
import AuthorProfileEdit from "../../admin/componets/auth/AuthorProfileEdit";

// Lazy Load Components
const AdminViewAuthor = lazy(() =>
  import("../../admin/componets/auth/AdminViewAuthor")
);
const ViewFeedback = lazy(() =>
  import("../../admin/componets/feedback/ViewFeedback")
);
const AdminViewPost = lazy(() =>
  import("../../admin/componets/post/AdminViewPost")
);
const EditPost = lazy(() => import("../../admin/componets/post/EditPost"));
const EditProfile = lazy(() =>
  import("../../admin/componets/profile/EditProfile")
);
const AddAuthors = lazy(() => import("../../admin/pages/AddAuthors"));
const Dashbord = lazy(() => import("../../admin/pages/Dashbord"));
const Profile = lazy(() => import("../../admin/pages/Profile"));
const CreatePost = lazy(() => import("../../admin/componets/post/CreatePost"));

export const DashbordRoute = (userData) => {
  // const { userData } = useContext(AuthContext);

  if (!userData) return []; // ✅ Fix: Always return an array

  const commonRoutes = [
    {
      index: true,
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <Dashbord />
        </PrivateRoute>
      ),
    },
    {
      path: "addPost",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <CreatePost />
        </PrivateRoute>
      ),
    },
    {
      path: "admin-view-post",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <AdminViewPost />
        </PrivateRoute>
      ),
    },
    {
      path: "edit-post/:id",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <EditPost />
        </PrivateRoute>
      ),
    },
    {
      path: "profile",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <Profile />
        </PrivateRoute>
      ),
    },
    {
      path: "edit-profile/:uid",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <EditProfile />
        </PrivateRoute>
      ),
    },
    {
      path: "view-feedback",
      element: (
        <PrivateRoute allowedRole={["admin", "editor"]}>
          <ViewFeedback />
        </PrivateRoute>
      ),
    },
  ];

  const adminRoutes = [
    {
      path: "addAuthor",
      element: (
        <PrivateRoute allowedRole={["admin"]}>
          <AddAuthors />
        </PrivateRoute>
      ),
    },
    {
      path: "view-author-list",
      element: (
        <PrivateRoute allowedRole={["admin"]}>
          <AdminViewAuthor />
        </PrivateRoute>
      ),
    },
    {
      path: "author-Edit-Profile/:id",
      element: (
        <PrivateRoute allowedRole={["admin"]}>
          <AuthorProfileEdit />
        </PrivateRoute>
      ),
    },
  ];

  return [
    {
      path: "/dashbord",
      element: (
        <AuthGuard>
          <NavLayout />
        </AuthGuard>
      ),
      children: [...commonRoutes, ...adminRoutes],
    },
  ];
};
