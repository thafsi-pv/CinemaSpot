import "./LogIn.css";
// import logo from "../../assets/tcslogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import Layout1 from "../../components/layout/Layout1";
import Input from "../../components/Input/Input";
import useHandleChange from "../../hooks/useHandleChange";

const LogIn = () => {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();

  const usernameref = useRef(null);
  const { formData, handleInputChange: customHandleChange } = useHandleChange(
    {}
  );

  //const [formData, setFormData] = useState({});

  useEffect(() => {
    usernameref.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    Auth.login(formData.Username, formData.Password);
    navigate("/home", { replace: true });
  };

  const handleInputChange = (e) => {
    customHandleChange(e);
  };
  // if (Auth?.isAuth) {
  //   return navigate("/home");
  // }

  return (
    <>
      <Layout1>
        <div className="login-container">
          <div className="login-title">
            <p>Sign In</p>
          </div>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="login-input-container"
          >
            <div className="input-div">
              <Input
                refer={usernameref}
                type={"text"}
                palaceholder={"User Name"}
                name={"Username"}
                onchange={handleInputChange}
              />
            </div>
            <div className="input-div">
              <Input
                type={"password"}
                palaceholder={"Password"}
                name={"Password"}
                onchange={handleInputChange}
              />
              <div>
                <span className="error error-username">{Auth.authError}</span>
              </div>
            </div>
            <div className="button-div">
              <button type="submit">Sign In</button>
            </div>
            <Link to="/forgotpassword">
              <div className="forgot-pwd">
                <p>Forgot Password?</p>
              </div>
            </Link>
          </form>
          <div className="sign-upnav">
            <div>
              <p>
                New to CinemaSpot?
                <Link to="/signup">
                  <span className="signup-link"> Sign Up Now</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout1>
      {/* </div> */}
    </>
  );
};

export default LogIn;
