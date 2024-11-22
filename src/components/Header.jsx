import React, { useContext, useEffect, useState } from "react";
import logo from "../images/logo.jpg"
import "../App.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
function Header() {
  const [btnreactname, setName] = useState("login")
  const onlineStatus = useOnlineStatus()
  const {loggedUser}=useContext(userContext)
  console.log(loggedUser,"jbihuh")

  useEffect(() => {

  }, [btnreactname]);
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 to-purple-200 shadow-md p-4">
      <div className="logo-container">
        <img className="w-16 h-16 object-contain rounded-full" src={logo} alt="LOGO" />
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-10 text-lg font-semibold text-gray-700">
          
          <li className="hover:text-pink-600"><Link to={"/"}>Home</Link></li>
          <li  className="hover:text-pink-600"> <Link to={"/about"}>About</Link> </li>
          <li  className="hover:text-pink-600"><Link to={"/contact"}>Contact</Link></li>
          <li  className="hover:text-pink-600"><Link to={"/cart"}>Cart</Link></li>
          <li  className="hover:text-pink-600"><Link to={"/grocery"}>Grocery</Link></li>
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
          <li  className="hover:text-pink-600">User:{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
