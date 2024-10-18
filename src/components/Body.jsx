import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import resListData from "../utils/mockData";
import Shimmer from "./Shimmer";


function Body() {
  const [resList,setList] = useState([]);


  useEffect (()=>{
    fetchdata();
  },[]);

  const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
    console.log(json);
    setList(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log(resList,"kitty");
  if(resList?.length === 0){
    return <Shimmer/>
  }



  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn" onClick={()=>{
          const filteredList = resList.filter((res)=> res.avgRating>4);
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
