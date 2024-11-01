import React, { useEffect, useState} from "react";
import logo from "../images/logo.jpg"
import "../App.css"
import { Link } from "react-router-dom";
function Header() {
  const [btnreactname,setName] = useState("login")

useEffect(()=>{

},[btnreactname]);
console.log("useEffect is called");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="LOGO" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li> <Link to={"/about"}>About</Link> </li>
          <li><Link to={"/contact"}>Contact</Link></li>
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
