import UserClass from "./UserClass"
import User from "./Users"

const About= ()=>{
    return(
       <div>
         <h1>About Page</h1>
        <h2>This is about Page</h2>
        <h3>------------------------------------------</h3>
        <User name={"Arshad T P"} location={"Kannur"} email={"arshadtp89@gmail"}/>
        <h3>------------------------------------------</h3>
        <UserClass name={"Arshad T P"} location={"Kannur"} email={"arshadtp89@gmail.com"}/>
       </div>
    )
}

export default About