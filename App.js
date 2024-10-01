import React from "react";
import ReactDOM from "react-dom/client"; 
import logo from "../React/public/image/logo.jpg";
import cartImage from "../React/public/image/cardimage.png"

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
            src={logo} alt="LOGO"/> 
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
    );
};

const RestaurantCard = () =>{
    return (
        <div className="res-card">
           
            <img className="res-img"
            src={cartImage} alt="cart Image"></img>
             <h3>Meghana Biriyani</h3>
            
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
            <RestaurantCard/>
            </div>
        </div>
    );
};

  const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
  };



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

