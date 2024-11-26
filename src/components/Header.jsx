import React, { useContext, useEffect, useState } from "react";
import logo from "../images/logo.jpg"
import "../App.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
function Header() {
  const [btnreactname, setName] = useState("login")
  const onlineStatus = useOnlineStatus()
  const { loggedUser } = useContext(userContext)

  const cartItem = useSelector((store) => store.cart)
  console.log(cartItem)


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
          <li className="hover:text-pink-600"> <Link to={"/about"}>About</Link> </li>
          <li className="hover:text-pink-600"><Link to={"/contact"}>Contact</Link></li>
          <li className="flex items-center hover:text-pink-600">
            <Link to="/cart" className="flex items-center">
              <span>🛒</span><span>Cart</span>
              {cartItem.length > 0 && (
                <span className="ml-2 text-xs font-medium text-white bg-red-500 rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItem.length}
                </span>
              )}
            </Link>
          </li>


          <li className="hover:text-pink-600"><Link to={"/grocery"}>Grocery</Link></li>
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
          <li className="hover:text-pink-600">User:{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
