import { useEffect, useState } from "react"
import { MENU_API_BASE_URL } from "../utils/constant";


const useRestaurantMenu = (id)=>{

    const [resInfo,SetResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(`${MENU_API_BASE_URL}&restaurantId=${id}`)
        const json= await data.json()
        console.log(json,'json data restuarant fetching is here -=------->>>>')
        SetResInfo(json.data)
    }

    return resInfo;

}

export default useRestaurantMenu;