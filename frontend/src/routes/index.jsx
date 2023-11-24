import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";

const Routes = () => {
	const { token } = useAuth();

	const routesForPublic = [
		{
			path: "/register",
			element: <Register />,
		},
	];

	const routesForAuthenticatedOnly = [
		{
			path: "/",
			element: <ProtectedRoute />,
			children: [
				{
					path: "/profile",
					element: <Profile />,
				},
				{
					path: "/moderator",
					element: <div>Moderator Page</div>,
				},
				{
					path: "/admin",
					element: <div>Admin Page</div>,
				},
			],
		},
	];

	const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <div>Home Page</div>
        },
		{
			path: "/login",
			element: <Login />,
		},
	];

	const router = createBrowserRouter([
		...routesForPublic,
		...(!token ? routesForNotAuthenticatedOnly : []),
		...routesForAuthenticatedOnly,
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
