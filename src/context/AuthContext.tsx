// GLOBAL AUTHENTICATION STATE


import React, { createContext, useState, useContext, children } from "react";



interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;

}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // single source of truth for login status 
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


    //login and logout toggle boolean when state schanges 
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used inside <AuthProvider>');
    return context;
}