import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authError, setAuthError] = useState("");
  const {
    value,
    handleGetLS,
    handleSetLS,
    handleRemoveLS,
  } = useLocalStorage("token");

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = handleGetLS("token");
    token != "" && setIsAuth(true);
  }, []);

  const login = (username, password) => {
    if (username === "test" && password === "test") {
      //localStorage.setItem("token", "my-token");
      handleSetLS("token", "my-token");
      setIsAuth(true);
      setAuthError({});
    } else {
      setAuthError("Incorrect username or password.!");
    }
  };

  const logout = () => {
    //localStorage.removeItem("token");
    handleRemoveLS("token");
    setIsAuth(false);
    setAuthError("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, authError }}>
      {props.children}
    </AuthContext.Provider>
  );
};
