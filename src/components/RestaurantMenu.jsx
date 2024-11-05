import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../App.css";
import { data } from "@remix-run/router";


const RestaurantMenu = ()=>{
    const [resInfo,SetResInfo]=useState(null)
    useEffect (()=>{
        fetchData();

    },[])
    const fetchData = async ()=>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=583&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
        );
        const json= await data.json()
        console.log(json,"kitty");
       SetResInfo(json.data)

    }
    
    if(resInfo === null) return <Shimmer/>
    const {name,city,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itrmcard",itemCards);
   


  

    
    
    return (
        <div className="menu">
          <h1 >{name}</h1>
          <p >Location: {city}</p>
          <p >Price for Two: {costForTwoMessage}</p>
          <p >Rating: {avgRating} ★</p>
        <h2>Menu</h2>
          <ul>
            {itemCards.map(item =>
                 <li key={item.card.info.id}>
                    {item.card.info.name} - {" RS. "}
                    {item.card.info.price/100}
                 </li>)}

          </ul>
        </div>
      );
}

export default RestaurantMenu;