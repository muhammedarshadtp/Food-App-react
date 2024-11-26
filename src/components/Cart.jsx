import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../utils/constant";
import { clearItems, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearItems())
  }
  const handleRemoveCart=()=>{
    dispatch(removeItems())
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8">
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between mb-6 border-b pb-3">
          <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Clear Cart
          </button>
        </div>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={imageUrl + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.card.info.name}
                  </h2>
                  <p className="text-gray-600">
                    {item.card.info.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-800">
                  ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </span>
                <button onClick={handleRemoveCart}
                  className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full  focus:outline-none"
                  aria-label="Remove"
                >
                  ✖
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
