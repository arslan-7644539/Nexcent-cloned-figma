import NavLayout from "../admin/componets/adminNavbar/NavLayout";
import AdminViewAuthor from "../admin/componets/auth/AdminViewAuthor";
import ViewFeedback from "../admin/componets/feedback/ViewFeedback";
import AdminViewPost from "../admin/componets/post/AdminViewPost";
import EditPost from "../admin/componets/post/EditPost";
import EditProfile from "../admin/componets/profile/EditProfile";
import AddAuthors from "../admin/pages/AddAuthors";
import Dashbord from "../admin/pages/Dashbord";
import Profile from "../admin/pages/Profile";
import AuthGuard from "../componets/navbar/AuthGuard";
import CreatePost from "../admin/componets/post/CreatePost";

export const dashbordRoute = [
  {
    path: "/dashbord",
    element: (
      <AuthGuard>
        <NavLayout />,
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Dashbord />,
      },
      {
        path: "addPost",
        element: <CreatePost />,
      },
      {
        path: "admin-view-post",
        element: <AdminViewPost />,
      },
      {
        path: "edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile/:uid",
        element: <EditProfile />,
      },
      {
        path: "addAuthor",
        element: <AddAuthors />,
      },
      {
        path: "view-author-list",
        element: <AdminViewAuthor />,
      },
      {
        path: "view-feedback",
        element: <ViewFeedback />,
      },
    ],
  },
];
