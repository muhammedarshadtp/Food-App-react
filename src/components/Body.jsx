import React, { useState } from "react";
import RestaurantCard, { withExtraOffers } from "./RestaurantCard";
import "../App.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";


function Body() {

  const { resList, filteredList, setFilteredList } = useFetchRestaurants()
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const ExtraOffers=withExtraOffers(RestaurantCard)

  console.log(resList);
  if (!onlineStatus) {
    return (
      <div className="body">
        {/* Offline Notification Bar */}
        {!onlineStatus && (
          <div className="bg-red-500 text-white text-center py-4 rounded-lg shadow-md mb-6">
            <p className="text-lg font-semibold flex items-center justify-center gap-2">
              🚨 <span>Uh-oh! You've gone offline!</span>
            </p>
            <p className="mt-2 text-sm">
              Looks like Wi-Fi went on vacation 🌴. Refresh your connection to get back to browsing! 📡💨
            </p>
          </div>
        )}
      </div>
    )
  }

  if (resList?.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body overflow-x-hidden">
      <br />
      <div className="filter flex flex-wrap justify-center ">
        <div className="search flex items-center space-x-4 w-full md:w-auto">
          <input type="text"
            className="border border-gray-300 rounded-lg p-2 w-80 max-w-md"
            placeholder="Search for a restaurant..."
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
            onClick={() => {

              const filteredItems = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredList(filteredItems)
            }}>Search</button>

        </div>
        <div className="search m-2 p-2 flex items-end ">
          <button
            className="px-6 py-2 bg-green-300 -500 text-black font-semibold rounded-lg"
            onClick={() => {
              const filteredList = resList.filter((res) => res.info.avgRating > 4.5);
              setFilteredList(filteredList);

            }}>
            Top Rated Restaurent</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 mt-6">
        {/* Loop through the resList array and render a RestaurantCard for each */}
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant.info.id}>

            {restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ? (
              <ExtraOffers resdata={restaurant}/>
            ) : (

              <RestaurantCard resdata={restaurant} />
            )   }

           
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
