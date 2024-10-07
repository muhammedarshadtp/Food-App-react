import React from "react";
import "../App.css";

function RestaurantCard(props) {
  const { resdata } = props;
  return (
    
    <div className="res-card">
      <img className="res-img" src={resdata.cloudinaryImageId} alt={`${resdata.name} Image`} />
      <h3><i>Name</i>:{resdata.name}</h3>
      <h4><i>Cuisines</i>:{resdata.cuisines.join(", ")}</h4>
      <h4><i>Location</i>:{resdata.areaName} </h4>
      <h4><i>Ratings</i>:{resdata.avgRating} stars</h4>
      <h4><i>Price</i>:{resdata.costForTwo}</h4>
      <h4><i>Time</i>:{resdata.sla.deliveryTime} minutes</h4>
    </div>
  );
}

export default RestaurantCard;
