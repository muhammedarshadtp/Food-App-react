
import { useRouteError } from "react-router-dom"


const Error = () =>{

    const err=useRouteError();
    console.log(err);

    return(
        <div>
            <h1>oopsss!!!!!!</h1>
            <h2>Somthing went wrong..........</h2>
            <h2>{err.status}  {err.statusText}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}

export default Error