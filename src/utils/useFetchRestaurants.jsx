import { useEffect, useState } from "react";



// whenever state variable update, react triggers a reconsilation cycle (re-renders the components)
const useFetchRestaurants =()=>{
    const [resList,setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

     useEffect (()=>{
    fetchdata();
  },[]);

  const fetchdata = async ()=>{
    console.log('hai api call 123')
    
    // const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550", {
      mode: "no-cors"
    });
    
    const json = await data.json()
    const restaurants =(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setList(restaurants)
    setFilteredList(restaurants)
  }
  return {resList,filteredList,setFilteredList}

}

export default useFetchRestaurants;