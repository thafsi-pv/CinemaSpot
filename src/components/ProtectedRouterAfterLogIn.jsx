import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const ProtectedRouterAfterLogIn = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  return isAuth ? navigate(-1) : <Outlet />;
};

export default ProtectedRouterAfterLogIn;
