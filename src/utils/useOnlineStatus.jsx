import { useEffect, useState } from "react"


const useOnlineStatus = ()=>{
    const [onlineStatus,SetOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            SetOnlineStatus(true);
        })
        window.addEventListener("offline", ()=>{
            SetOnlineStatus(false);
        })
        
    })

    return onlineStatus
}

export default useOnlineStatus;