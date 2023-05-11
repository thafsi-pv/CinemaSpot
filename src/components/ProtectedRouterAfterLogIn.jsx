import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const ProtectedRouterAfterLogIn = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  console.log("🚀 ~ file: ProtectedRouterAfterLogIn.jsx:8 ~ ProtectedRouterAfterLogIn ~ isAuth:", isAuth)
  return isAuth ? navigate(-1) : <Outlet />;
};

export default ProtectedRouterAfterLogIn;
