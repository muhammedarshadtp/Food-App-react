import React from "react";
import cartImage from "../images/cardimage.png"
import "../App.css"

function RestaurantCard() {
  return (
    <div className="res-card">
      <img className="res-img" src={cartImage} alt="cart Image"></img>
      <h3>Meghana Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h5>38 minutes</h5>
    </div>
  );
}

export default RestaurantCard;
