
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:"dummy",
                location:"kerala",
            }
        }
       
    }
   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/Arshad")
    const json= await data.json()
    this.setState({
        userInfo:json,
    })
    console.log(json);
       
    }

    render(){
        const {name, avatar_url}=this.state.userInfo
       
        return(
            <div>
                <h1 className="UserClass-header">This is Class components</h1>
            <img src={avatar_url} alt="" />
            <h1>Name:{name}</h1>
            
            
        </div>
        )
    }
}

export default UserClass;