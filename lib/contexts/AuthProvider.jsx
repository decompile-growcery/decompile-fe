import { createContext, useState } from "react";

export const AuthContext = createContext(false);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
