import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import Unauthorized from "../pages/unauthorized/Unauthorized";
import NotFound from "../pages/404/NotFound";
const Login = lazy(() => import("../pages/auth/Login"));
export const authRoute = [
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <CircularProgress />
          </div>
        }
      >
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
