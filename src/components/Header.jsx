import React, { useState } from "react";
import logo from "../images/logo.jpg"
import "../App.css"

function Header() {
  const [btnreactname,setName] = useState("login")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login"
          onClick={()=>{
            btnreactname === 'login' ? setName("logout") : setName("login")
            
          }}
          >
            {btnreactname}
            </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
