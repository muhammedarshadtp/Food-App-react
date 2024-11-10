import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../App.css";
import { data } from "@remix-run/router";
import { useParams } from "react-router-dom";
import { MENU_API_BASE_URL } from "../utils/constant";



const RestaurantMenu = ()=>{
    const [resInfo,SetResInfo]=useState(null)
    const {id} = useParams()
    useEffect (()=>{
        fetchData();

    },[])
    const fetchData = async ()=>{
        const data = await fetch(`${MENU_API_BASE_URL}&restaurantId=${id}` );
        console.log(data,"data kitty");
        const json= await data.json()
       SetResInfo(json.data)

    }
    
    if(resInfo === null) return <Shimmer/>
    const {name,city,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
 


    
    
    return (
        <div className="menu">
         <div className="restaurant-info">
                <h1 className="restaurant-name">{name}</h1>
                <p className="restaurant-location">📍 Location: {city}</p>
                <p className="restaurant-cost">💲 Price for Two: {costForTwoMessage}</p>
                <p className="restaurant-rating">⭐ Rating: {avgRating} ★</p>
            </div>
            <h2 className="menu-title">Menu</h2>
          <ul>
            {itemCards.map(item =>{
                const imageId = item.card.info.imageId.trim();
               const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`;
                return (
                 <li key={item.card.info.id} className="menu-item">
                    <img src={imageUrl} alt={item.card.info.name} />

                    <div  className="menu-item-info">
                   <div className="menu-item-name">{item.card.info.name}</div> 
                   <div className="menu-item-price">
                                ₹{item.card.info.price / 100 || item.card.info.defaultPrice/100}
                            </div>

                 </div>
                 </li>
                )
            }
                 )}

          </ul>
        </div>
      );
}

export default RestaurantMenu;