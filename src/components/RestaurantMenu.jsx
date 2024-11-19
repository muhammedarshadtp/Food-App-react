
import Shimmer from "./Shimmer";
import "../App.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCarategory from "./RestaurentCategory";




const RestaurantMenu = () => {
  const { id } = useParams()
  const resInfo = useRestaurantMenu(id);
  const onlineStatus = useOnlineStatus();

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


  if (resInfo === null) return <Shimmer />
  const { name, city, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="p-6">

      <div className="flex flex-wrap bg-gray-50 rounded-lg shadow-md p-6 mb-8 justify-center items-center">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="text-gray-700 mb-2">
            📍 <span className="font-semibold">Location:</span> {city}
          </p>
          <p className="text-gray-700 mb-2">
            💲 <span className="font-semibold">Price for Two:</span> {costForTwoMessage}
          </p>
          <p className="text-gray-700">
            ⭐ <span className="font-semibold">Rating:</span> {avgRating} ★
          </p>
        </div>
      </div>
      <div className="text-center">
      {categories.map((category)=>
        <RestaurentCarategory key={category?.card?.card.title} data={category?.card?.card}/>       
      )}
      </div>
    </div>
    

  );
}

export default RestaurantMenu;