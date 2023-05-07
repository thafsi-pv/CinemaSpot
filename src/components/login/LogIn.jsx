import "./login.css";
import logo from "../../assets/tcslogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  const usernameref = useRef(null);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    usernameref.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    Auth.login(formData.username, formData.password);
  };
  if (Auth?.isAuth) {
    return navigate("/home");
  }

  return (
    <>
      <div className="login">
        <div className="overlay"></div>
        <div className="tcs-logo-container">
          <img className="tcs-logo" src={logo} alt="tsc logo" />
        </div>
        <div className="login-container">
          <div className="login-title">
            <p>Sign In</p>
          </div>
          <form onSubmit={handleLogin} className="login-input-container">
            <div className="input-div">
              <input
                type="text"
                name=""
                placeholder="User Name"
                id=""
                ref={usernameref}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <span className="error error-username">
                {Auth.authError.username}
              </span>
            </div>
            <div className="input-div">
              <input
                type="password"
                name=""
                placeholder="PassWord"
                id=""
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span className="error error-username">
                {Auth.authError.password}
              </span>
            </div>
            <div className="button-div">
              <button type="submit">Sign In</button>
            </div>
            <div className="forgot-pwd">
              <p>Forgot Password?</p>
            </div>
          </form>
          <div className="sign-upnav">
            <div>
              <p>
                New to CinemaSpot? <span>Sign Up Now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
