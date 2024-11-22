import { useDispatch } from "react-redux";
import { imageUrl } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch=useDispatch();

    const HandleAddItem=(item)=>{
        dispatch(addItems(item))
    }

    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between" >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold text-lg py-1">{item.card.info.name}</span> <br />
                            <span className="text-md text-gray-900 font-medium py-1"> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-sm text-gray-500 py-1">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 relative">
                        <img src={imageUrl + item.card.info.imageId} alt="Image" className="w-full rounded-lg" />
                        <button className="absolute  left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-lg font-bold text-green-400 py-1 px-12 -mt-10 rounded-lg hover:bg-slate-100 transition duration-200"
                        onClick={()=>HandleAddItem(item)}
                        >
                            Add+
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList