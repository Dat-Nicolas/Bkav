import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Register";
import Home from "../pages/root/Home";
import Chat from "../pages/root/Chat";
import ErrorPage from "../Components/ErrorPage";

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />, 
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <SignUp />,
                path: '/signup'
            },
        ]
    },
    {
        element: <MainLayout />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
          {
            element: <Chat />,
            path: "/chat/:id?", 
          },
        ],
      },
]);