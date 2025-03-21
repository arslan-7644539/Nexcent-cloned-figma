// routes.jsx

import { Layout } from "../componets/navbar/Layout";

import { dashbordRoute } from "./dashbordRoute";
import { authRoute } from "./authRoute";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
// ----------------------------------------------------------

const Home = lazy(() => import("../pages/home/Home"));
const BlogPost = lazy(() => import("../pages/bloge/BlogPost"));
const ViewSinglePost = lazy(() => import("../pages/bloge/ViewSinglePost"));
const About = lazy(() => import("../pages/about/About"));
const ContactUs = lazy(() => import("../pages/contact/ContactUs"));
// -------------------------------------------------------------------

export const appRoutes = [
  // main route
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <CircularProgress />
          </div>
        }
      >
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
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
