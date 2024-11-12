import { useState } from "react"


const User=({name,location,email})=>{
    const[count,SetCount]=useState(0)
    
    return(
        <div>
            <h1 className="User-header">This is Functional Components</h1>
            <h1>count:{count}</h1>
            <button onClick={()=>{
                SetCount(count + 1)
            }}>Increment</button>
            <button onClick={()=>{
                SetCount(count - 1)
            }}>Degrecment</button>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Email:{email}</h3>
        </div>
    )
}

export default User