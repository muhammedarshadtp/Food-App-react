
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("child componentDidMount");
    }

    render(){
        console.log("child render");
        const{name,location,email}=this.props
        const{count }=this.state
        return(
            <div>
                <h1 className="UserClass-header">This is Class components</h1>
                <h1>count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Increses</button>  

                <button onClick={()=>{
                    this.setState({
                        count : this.state.count -1
                    })
                }}>Degresess</button>
                
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Email:{email}</h3>
        </div>
        )
    }
}

export default UserClass;