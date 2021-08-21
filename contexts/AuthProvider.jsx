import { createContext, useState } from "react";

const AuthProvider = ({ children }) => {
    const [authenticated, isAuthenticated] = useState(false);
    const AuthContext = createContext(authenticated);

    return (
        <AuthContext.Provider value={false}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;