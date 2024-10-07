import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";

// Sample restaurant data array (resList)
const resList = [
  {
    id: "23678",
    name: "McDonald's",
    cloudinaryImageId: "https://wallpapers.com/images/hd/mcdonald-s-food-pictures-1200-x-879-vyui5fydlg669w0w.jpg",
    locality: "5th Block",
    areaName: "Koramangala",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    sla: { deliveryTime: 25 },
  },
  {
    id: "23679",
    name: "KFC",
    cloudinaryImageId: "https://www.shutterstock.com/image-photo/lopburi-thailand-october-272020-kfc-260nw-1841921497.jpg ",
    locality: "6th Block",
    areaName: "HSR Layout",
    costForTwo: "₹500 for two",
    cuisines: ["Fried Chicken", "Fast Food"],
    avgRating: 4.2,
    sla: { deliveryTime: 30 },
  },
  {
    id: "23680",
    name: "Burger King",
    cloudinaryImageId: "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg",
    locality: "4th Block",
    areaName: "BTM Layout",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "Fast Food"],
    avgRating: 4.3,
    sla: { deliveryTime: 20 },
  },
  {
    id: "23681",
    name: "Pizza Hut",
    cloudinaryImageId: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    locality: "3rd Block",
    areaName: "Jayanagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas", "Italian"],
    avgRating: 4.1,
    sla: { deliveryTime: 35 },
  },
  {
    id: "23682",
    name: "Subway",
    cloudinaryImageId: "https://media.istockphoto.com/id/1180278334/photo/homemade-turkey-sub-sandwich.jpg?s=612x612&w=0&k=20&c=cqf6JEHJTz-7a4IaVEn7qZHc8Im_7jxvoVjo3VWkEzE=",
    locality: "2nd Block",
    areaName: "Indiranagar",
    costForTwo: "₹300 for two",
    cuisines: ["Subs", "Healthy Food"],
    avgRating: 4.4,
    sla: { deliveryTime: 15 },
  },
  {
    id: "23683",
    name: "Domino's Pizza",
    cloudinaryImageId: "https://content3.jdmagicbox.com/comp/def_content_category/pizza-outlets-dominos-10370639-jyvpm4yiqt.jpg",
    locality: "1st Block",
    areaName: "Whitefield",
    costForTwo: "₹450 for two",
    cuisines: ["Pizzas", "Fast Food"],
    avgRating: 4.3,
    sla: { deliveryTime: 28 },
  },
  {
    id: "23684",
    name: "Starbucks",
    cloudinaryImageId: "https://ww2.kqed.org/app/uploads/sites/39/2012/08/starbucks.jpg",
    locality: "7th Block",
    areaName: "Koramangala",
    costForTwo: "₹700 for two",
    cuisines: ["Beverages", "Cafe"],
    avgRating: 4.6,
    sla: { deliveryTime: 20 },
  },
  {
    id: "23685",
    name: "Dunkin' Donuts",
    cloudinaryImageId: "https://www.shutterstock.com/image-photo/quincy-massachusetts-april-2017-dunkin-260nw-628999787.jpg",
    locality: "8th Block",
    areaName: "MG Road",
    costForTwo: "₹350 for two",
    cuisines: ["Donuts", "Beverages"],
    avgRating: 4.0,
    sla: { deliveryTime: 18 },
  },
  {
    id: "23686",
    name: "Taco Bell",
    cloudinaryImageId: "https://b.zmtcdn.com/data/pictures/2/18820472/b07647252aae32993047faf13a1cccf4.jpg",
    locality: "9th Block",
    areaName: "Electronic City",
    costForTwo: "₹450 for two",
    cuisines: ["Mexican", "Fast Food"],
    avgRating: 4.1,
    sla: { deliveryTime: 22 },
  },
  {
    id: "23687",
    name: "Cafe Coffee Day",
    cloudinaryImageId: "https://thumbs.dreamstime.com/b/cafe-coffee-day-belgium-yummy-ccd-food-124553600.jpg",
    locality: "10th Block",
    areaName: "JP Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Beverages", "Cafe"],
    avgRating: 4.2,
    sla: { deliveryTime: 30 },
  },

];

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
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
