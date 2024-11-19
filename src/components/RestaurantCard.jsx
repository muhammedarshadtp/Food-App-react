import React from "react";
import "../App.css";

function RestaurantCard(props) {
  const { resdata } = props;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.info.cloudinaryImageId}`;

  return (
    
    <div className="m-4 p-4 w-[230px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadowl">
      <img className="rounded-lg w-full h-[150px] object-cover" 
       src={imageUrl} alt={`${resdata.name} Image`} />
     <div className="mt-4">
    <h3 className="font-bold text-lg truncate">{resdata.info.name}</h3>
    <h2 className="text-gray-600 text-sm"><i>Cuisines:</i> {resdata.info.cuisines.join(", ")}</h2>
    <h2 className="text-gray-600 text-sm"><i>Location:</i> {resdata.info.areaName}</h2>
    <h2 className="text-gray-600 text-sm"><i>Ratings:</i> {resdata.info.avgRating} ⭐</h2>
    <h2 className="text-gray-600 text-sm"><i>Price:</i> {resdata.info.costForTwo}</h2>
  </div>

    </div>
  );
  
}
export const withExtraOffers=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div className="relative">
        <div className="absolute -left-3 top-4 bg-orange-500 text-white font-bold text-xs py-1 px-3 rounded-md rotate-[-10deg] z-10">
          Flat Offer
        </div>
        <RestaurantCard {...props} />
      </div>
    )
  }
  
}

export default RestaurantCard;
