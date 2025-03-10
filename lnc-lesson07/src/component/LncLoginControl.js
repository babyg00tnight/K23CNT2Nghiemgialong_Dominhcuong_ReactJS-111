import React, {Component} from "react";
import LncLoginComp from "./LncLoginComp";
import LncLogoutComp from "./LncLogoutComp";

class LncLoginControl extends Component { 
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    //ham xu ly su kien login
    lnchandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let lncElenment = isLoggedIn?<LncLoginComp /> : <LncLogoutComp />
        return (
            <div className="alert alert-danger">
                {lncElenment}

                {
                    isLoggedIn?
                    <button onClick={()=>this.setState(({isLoggedIn:false}))}>logout</button>
                    :<button onClick={this.lnchandleLogin}>login</button>
                }
            </div>
        );
    }
}  

 export default LncLoginControl;