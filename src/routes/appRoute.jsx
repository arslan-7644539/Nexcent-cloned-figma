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
import ViewSinglePost from "../pages/bloge/ViewSinglePost";
import About from "../pages/about/About";
import ContactUs from "../pages/contact/ContactUs";
import ViewFeedback from "../admin/componets/feedback/ViewFeedback";
import { dashbordRoute } from "./dashbordRoute";
import { authRoute } from "./authRoute";

export const appRoutes = [
  // main route
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blog-Post",
        element: <BlogPost />,
      },
      {
        path: "single-post/:id",
        element: <ViewSinglePost />,
      },
    ],
  },
  // ------------------------------ auth section
  ...authRoute,

  // ------------------------------------------------admin dashbord section
  ...dashbordRoute,
];
