import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg"
import "../App.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
function Header() {
  const [btnreactname, setName] = useState("login")
  const onlineStatus = useOnlineStatus()

  useEffect(() => {

  }, [btnreactname]);
  console.log("useEffect is called");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul className="header-link">
          
          <li><Link to={"/"}>Home</Link></li>
          <li> <Link to={"/about"}>About</Link> </li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
          <button className="login"
            onClick={() => {
              btnreactname === 'login' ? setName("logout") : setName("login")

            }}
          >
            {btnreactname}
          </button>
          <li>
            Online Status:{" "}
            {onlineStatus ? (
              <span style={{ color: "green" }}>✔️</span>
            ) : (
              <span style={{ color: "red" }}>❌</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
