import { useState } from "react"


const User=({name,location,email})=>{
    const[count]=useState(0)
    const[count1]=useState(1)
    return(
        <div>
            <h1 className="User-header">This is Functional Components</h1>
            <h1>count:{count}</h1>
            <h1>count1:{count1}</h1>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Email:{email}</h3>
        </div>
    )
}

export default User