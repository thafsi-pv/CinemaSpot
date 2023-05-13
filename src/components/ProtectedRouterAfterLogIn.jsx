import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedRouterAfterLogIn = () => {
  const navigate = useNavigate();
  //const { isAuth } = useContext(AuthContext);

  const { value: token } = useLocalStorage("token");
  return token != null ? navigate(-1) : <Outlet />;
};

export default ProtectedRouterAfterLogIn;
