import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import Moderator from "../pages/moderator/Moderator";

const Routes = () => {
  const token = Cookies.get("token");
  const role = localStorage.getItem("role");
  const routesForPublic = [
    {
      path: "/register",
      element: <Register />,
    },
  ];

  const routesForUserOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Profile />,
        },
        {
          path: "/moderator",
          element: <div>Moderator Page</div>,
        },
      ],
    },
  ];

  const routesForAdminOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ path: "/", element: <Admin /> }],
    },
  ];

  const routesForModeratorOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ path: "/", element: <Moderator /> }],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...(role === "admin" ? routesForAdminOnly : []),
	...(role === "moderator" ? routesForModeratorOnly : []),
    ...routesForUserOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
