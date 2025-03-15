// routes.jsx

import Dashbord from "../admin/pages/Dashbord";
import AuthGuard from "../componets/navbar/AuthGuard";
import { Layout } from "../componets/navbar/Layout";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import NavLayout from "../admin/componets/adminNavbar/NavLayout";
import CreatePost from "../admin/componets/post/CreatePost";
import Profile from "../admin/pages/Profile";
import AddAuthors from "../admin/pages/AddAuthors";
import BlogPost from "../pages/bloge/BlogPost";
import AdminViewPost from "../admin/componets/post/AdminViewPost";
import EditPost from "../admin/componets/post/EditPost";
import EditProfile from "../admin/componets/profile/EditProfile";
import AdminViewAuthor from "../admin/componets/auth/AdminViewAuthor";

export const appRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          // <AuthGuard>
          <Home />
          // </AuthGuard>
        ),
      },
      {
        path: "blog-Post",
        element: <BlogPost />,
      },
    ],
  },
  // ------------------------------ auth section
  {
    path: "/login",
    element: <Login />,
  },

  // ------------------------------------------------admin dashbord section
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
    ],
  },
];
