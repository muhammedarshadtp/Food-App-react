import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../App.css";


const RestaurantMenu = ()=>{
    const [resInfo,SetResInfo]=useState(null)
    useEffect (()=>{
        fetchData();

    },[])
    const fetchData = async ()=>{
        const Data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=583&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
        const json= await Data.json()
        console.log(json,"kitty");

       const RestMenu = (json?.data?.cards[2]?.card?.card?.info)
       SetResInfo(RestMenu)

    }

    
    
    return resInfo === null ? (<Shimmer/>) : (
        <div className="menu-container">
          <h1 className="menu-title">{resInfo.name}</h1>
          <p className="menu-info">Location: {resInfo.city}</p>
          <p className="menu-info">Price for Two: {resInfo.costForTwoMessage}</p>
          <p className="menu-info">Rating: {resInfo.avgRating} ★</p>
        </div>
      );
}

export default RestaurantMenu;