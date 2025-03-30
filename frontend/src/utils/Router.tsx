import { createBrowserRouter } from "react-router-dom";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import NotFound from "../pages/NotFound";
import MainLayout from "../pages/MainLayout";
import AuthLayout from "../pages/AuthLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Blogs from "../pages/Blogs";
import Categories from "../pages/Categories";
import ProtectedRoute from "./ProtectedRoute";
import CreatePost from "../pages/CreatePost";



export const r = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/create-post",
                element: <CreatePost />,

            }

        ]

    },
    {
        path: "/", // Protected routes
        element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <LogInPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    }
])