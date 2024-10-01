import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css"

function Body() {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

export default Body;
