import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import resListData from "../utils/mockData";


function Body() {
  const [resList,setList] = useState(resListData)
  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn" onClick={()=>{
          const filteredList = resListData.filter((res)=> res.avgRating>4);
          setList(filteredList);

        }}>
          Top rated</button>
        </div>
      <div className="res-container">
        {/* Loop through the resList array and render a RestaurantCard for each */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
