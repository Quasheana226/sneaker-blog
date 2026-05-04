//THE BOUNCER check if the user is logged in before rendering the page 

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type React from "react";

interface Props {

    children: React.ReactNode; // Whatever page is protected 
}


const ProtectedRoute: React.FC<Props> = ({ children }) => {

    // Pull the login status 
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return < Navigate to="/login" replace />

    }
    // logged in 
    return <>{children}</>;

}

export default ProtectedRoute;