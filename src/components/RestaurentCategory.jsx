import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const RestaurentCarategory = ({ data,showItem,setShowIndex}) => {
    const handleClick= ()=>{
        setShowIndex();
    }
    return (
        <div>
            <div className="w-9/12 mx-auto my-4 bg-white shadow-lg p-4">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                    <span className="text-lg font-bold">
                        {data.title}({data.itemCards.length})</span>
                       
                    <span className="cursor-pointer"onClick={handleClick} >{showItem ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
                    
                </div>
               {showItem &&  <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurentCarategory;