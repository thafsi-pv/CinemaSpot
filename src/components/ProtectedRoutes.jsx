import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { AuthContext } from "../context/Auth";

const ProtectedRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  let auth = localStorage.getItem("token");
  console.log("🚀 ~ file: ProtectedRoutes.jsx:9 ~ ProtectedRoutes ~ auth:", auth)
  const { value: token } = useLocalStorage("token");
  return auth != null ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
