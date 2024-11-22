import React from "react"
import UserClass from "./UserClass"
import userContext from "../utils/userContext"

class About extends React.Component{
  constructor(props){
    super(props)
   
  }
  componentDidMount(){
   
  }
  
  render(){
    
    return(
      
      <div>
         <div>
      <userContext.Consumer>
      {({loggedUser})=>(
        <h1>User:{loggedUser}</h1>
      )}
      </userContext.Consumer>
        </div>
        <div>
      <userContext.Consumer>
      {({loggeduser})=>(
        <h1>{loggeduser}</h1>
      )}
      </userContext.Consumer>
        </div>
        <h1>About Page</h1>
       <h2>This is about Page</h2>
       <h3>------------------------------------------</h3>
       <UserClass name={"Arshad T P"}
        location={"Kannur"}
         email={"arshadtp89@gmail.com"}/>
     
      </div>
   )
    
  }

}

export default About