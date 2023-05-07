import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authError, setAuthError] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setIsAuth(true);
  }, []);

  const login = (username, password) => {
    const auth = false;
    if (username === "test" && password === "test") {
      localStorage.setItem("token", "my-token");
      setIsAuth(true);
      setAuthError({});
    } if (username != "test") {
      setAuthError({ ...authError, username: "Invalid username" });
     
    } 
     if(username==='test'){
      setAuthError({...authError,username:''})
    } if (password != "test") {
      setAuthError({ ...authError, password: "Invalid password" });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, authError }}>
      {props.children}
    </AuthContext.Provider>
  );
};
