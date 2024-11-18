
import Shimmer from "./Shimmer";
import "../App.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu = () => {
  const { id } = useParams()
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <Shimmer />
  const { name, city, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
<div className="p-6">
  {/* Restaurant Info Section */}
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


  {/* Menu Section */}
  <div>
    <h2 className="text-xl font-bold mb-6 text-center">🍴 Menu</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {itemCards.map((item) => {
        const imageId = item.card.info.imageId.trim();
        const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`;

        return (
          <div key={item.card.info.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Menu Item Image */}
            <img
              className="w-full h-40 object-cover rounded-lg mb-4"
              src={imageUrl}
              alt={item.card.info.name}
            />
            {/* Menu Item Info */}
            <div>
              <h3 className="font-bold text-lg truncate">{item.card.info.name}</h3>
              <p className="text-gray-800 text-md mt-2">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>

</div>

  );
}

export default RestaurantMenu;