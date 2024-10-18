import React from "react";
import "../App.css";

function RestaurantCard(props) {
  const { resdata } = props;
  console.log(resdata,"ithum");
  console.log(resdata.info.cloudinaryImageId,"image id");
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.info.cloudinaryImageId}`;

  return (
    
    <div className="res-card">
      <img className="res-img" src={imageUrl} alt={`${resdata.name} Image`} /> <br />
      <h3><i>Name</i>:{resdata.info.name}</h3>
      <h4><i>Cuisines</i>:{resdata.info.cuisines}</h4>
      <h4><i>Location</i>:{resdata.info.areaName} </h4>
      <h4><i>Ratings</i>:{resdata.info.avgRating} stars</h4>
      <h4><i>Price</i>:{resdata.info.costForTwo}</h4>
      {/* <h4><i>Timef</i>:{resdata.sla.deliveryTime} minutes</h4> */}
    </div>
  );
  
}

export default RestaurantCard;
