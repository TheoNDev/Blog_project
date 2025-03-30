import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IResponse, IUser } from "../types/interfaces";
import axiosInstance from "../utils/axiosInstance";



export interface IAuthContext {
    user: IUser | null;
    isAuthenticated: boolean;
    login: (user: IUser) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IAuthProvider {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const login = (user: IUser) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);

    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response: IResponse = await axiosInstance.get("/auth/user", { withCredentials: true });
                setUser(response.data.user);
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();


    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};