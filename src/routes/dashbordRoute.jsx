import { lazy, useContext } from "react";
import { AuthContext } from "../context/authContext";
import AuthGuard from "../componets/navbar/AuthGuard";
import NavLayout from "../admin/componets/adminNavbar/NavLayout";

// Lazy Load Components
const AdminViewAuthor = lazy(() =>
  import("../admin/componets/auth/AdminViewAuthor")
);
const ViewFeedback = lazy(() =>
  import("../admin/componets/feedback/ViewFeedback")
);
const AdminViewPost = lazy(() =>
  import("../admin/componets/post/AdminViewPost")
);
const EditPost = lazy(() => import("../admin/componets/post/EditPost"));
const EditProfile = lazy(() =>
  import("../admin/componets/profile/EditProfile")
);
const AddAuthors = lazy(() => import("../admin/pages/AddAuthors"));
const Dashbord = lazy(() => import("../admin/pages/Dashbord"));
const Profile = lazy(() => import("../admin/pages/Profile"));
const CreatePost = lazy(() => import("../admin/componets/post/CreatePost"));

export const DashbordRoute = (userData) => {
  // const { userData } = useContext(AuthContext);

  if (!userData) return []; // ✅ Fix: Always return an array

  const commonRoutes = [
    { index: true, element: <Dashbord /> },
    { path: "addPost", element: <CreatePost /> },
    { path: "admin-view-post", element: <AdminViewPost /> },
    { path: "edit-post/:id", element: <EditPost /> },
    { path: "profile", element: <Profile /> },
    { path: "edit-profile/:uid", element: <EditProfile /> },
  ];

  const adminRoutes = [
    { path: "addAuthor", element: <AddAuthors /> },
    { path: "view-author-list", element: <AdminViewAuthor /> },
    { path: "view-feedback", element: <ViewFeedback /> },
  ];

  const editorRoutes = [{ path: "view-feedback", element: <ViewFeedback /> }];

  return [
    {
      path: "/dashbord",
      element: (
        <AuthGuard>
          <NavLayout />
        </AuthGuard>
      ),
      children: [
        ...commonRoutes,
        // ...(userData?.role === "admin" ? adminRoutes : editorRoutes),
        ...adminRoutes,
        ...editorRoutes,
      ],
    },
  ];
};
