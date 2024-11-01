import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import Shimmer from "./Shimmer";


function Body() {
  const [resList,setList] = useState([]);

  const [searchText,setSearchText] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  // whenever state variable update, react triggers a reconsilation cycle (re-renders the components)
  console.log("Body Rendered");


  useEffect (()=>{
    fetchdata();
  },[]);

  const fetchdata = async ()=>{
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()
    console.log(json);
    const restaurants =(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setList(restaurants)
    setFilteredList(restaurants)
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
          <RestaurantCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
