import { createContext, useState } from "react";

export const AuthContext = createContext(false);

const AuthProvider = ({ children }) => {
    const [authenticated, isAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={authenticated}>
            { children }
        </AuthContext.Provider>
    )
}



export default AuthProvider;