import { useContext, useEffect, useState } from "react";
import logo from "../../assets/tcslogo.png";
import "./Header.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../../context/Auth";
import { DarkMode } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState("dark");

  const Aut = useContext(AuthContext);
  const color = useContext(DarkMode);

  useEffect(() => {
    setIsDarkMode(color.ColorMode);
  }, []);

  const handleLogOut = () => {
    Aut.logout();
  };

  const handleColorMode = (mode) => {
    color.setIColorMode(mode);
    setIsDarkMode(mode);
  };

  return (
    <div className="header-container">
      <div>
       <Link to='/home'> <img className="logo" src={logo} alt="tcs_logo" /></Link>
      </div>
      <div className="header-right">
        <div className="light_dark">
          {isDarkMode == "light" ? (
            <MdDarkMode
              className="color-switch"
              onClick={() => handleColorMode("dark")}
            />
          ) : (
            <MdLightMode
              className="color-switch"
              onClick={() => handleColorMode("light")}
            />
          )}
        </div>
        <div className="avatar-logout" onClick={(e) => handleLogOut()}>
          {/* <div className="btn-logout"> */}
          <p>Log Out</p>
          <img
            className="avatar"
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt=""
          />
          {/* <RxAvatar className="avatar" color="black" style={{ color: "black", fontSize: "1.5em" }} /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
