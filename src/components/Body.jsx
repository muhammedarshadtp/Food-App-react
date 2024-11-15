import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";


function Body() {
  
  const{resList,filteredList,setFilteredList}=useFetchRestaurants()
  const [searchText,setSearchText] = useState("");
  const onlineStatus=useOnlineStatus();


  if(!onlineStatus){
    return(
      <div className="body">
      {/* Only show the offline notification bar when offline */}
      {!onlineStatus && (
       <div className="status-bar offline">
       🚨 Uh-oh! You've gone offline! Looks like Wi-Fi went on vacation 🌴. 
       Refresh your connection to get back to browsing! 📡💨
     </div>
      )}

    </div>
    )
  }

  if(resList?.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body"> <br />
      <div className="filter"> 
        <div className="search">
          <input type="text" className="search-bar" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  />
          <button onClick={()=>{

            const filteredItems = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(filteredItems)
          }}>Search</button>

        </div>
        <button
        className="filter-btn" onClick={()=>{
          const filteredList = resList.filter((res)=> res.info.avgRating > 4.5);
          setFilteredList(filteredList);

        }}>
          Top rated</button>
        </div>
      <div className="res-container">
        {/* Loop through the resList array and render a RestaurantCard for each */}
        {filteredList.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant.info.id } className="restaurant-link">

          <RestaurantCard  resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
