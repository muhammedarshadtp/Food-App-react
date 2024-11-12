import React from "react"
import UserClass from "./UserClass"

class About extends React.Component{
  constructor(props){
    super(props)
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  
  render(){
    console.log("parent render");
    return(
      <div>
        <h1>About Page</h1>
       <h2>This is about Page</h2>
       <h3>------------------------------------------</h3>
       <UserClass name={"Arshad T P"} location={"Kannur"} email={"arshadtp89@gmail.com"}/>
      </div>
   )
    
  }

}

export default About