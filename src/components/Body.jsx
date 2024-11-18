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
    <div className="body overflow-x-hidden">
       <br />
      <div className="filter flex flex-wrap justify-center"> 
        <div className="search flex items-center space-x-4 w-full md:w-auto">
          <input type="text" 
          className="border border-gray-300 rounded-lg p-2 w-80 max-w-md" 
          placeholder="Search for a restaurant..."
          value={searchText} 
          onChange={(e)=>{setSearchText(e.target.value)}}  />
          <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
           onClick={()=>{

            const filteredItems = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(filteredItems)
          }}>Search</button>

        </div>
        <div className="search m-2 p-2 flex items-end ">
        <button
        className="px-6 py-2 bg-green-300 -500 text-black font-semibold rounded-lg" 
        onClick={()=>{
          const filteredList = resList.filter((res)=> res.info.avgRating > 4.5);
          setFilteredList(filteredList);

        }}>
          Top Rated Restaurent</button>
        </div>
        </div>
       
      <div className="flex flex-wrap">
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
