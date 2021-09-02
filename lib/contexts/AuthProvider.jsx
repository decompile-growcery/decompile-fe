import { createContext, useState } from "react";

export const AuthContext = createContext(false);//

export function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  //每个Context对象都会返回一个Provider React组件，它使得每个消费组件都能够订阅（监测）Context的变化
  //Provider接收一个value属性，传递给消费组件，在这里AuthContext是建立的Context对象，它的value为[user, setUser]
  //提供给AuthContext.Provider中。
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
