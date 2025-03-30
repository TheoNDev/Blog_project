import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface IProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
    const { user } = useAuth();

    return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;