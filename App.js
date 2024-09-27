import React from "react";
import ReactDOM from "react-dom/client"; 
import logo from "../React/public/image/logo.jpg"
/**
 * Header
 * -Logo
 * -Nav Item
 * Body
 * -RestaurantContainer
 * -RestaurantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


const Header = () =>{
    return(
        <div className="header">
          <div className="logo-container">
            <img 
            className="logo" 
            src={logo}/>
            </div>  
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

  const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
  }







const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

