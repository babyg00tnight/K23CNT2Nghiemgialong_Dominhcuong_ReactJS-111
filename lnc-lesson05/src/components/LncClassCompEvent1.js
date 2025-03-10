import React, {Component} from "react";

class LncClassCompEvent1 extends Component {
    //ham xu ly su kien
    LncEvenHandleClick1 = ()=>{
        alert("button 1 clicked");
    }
    LncEvenHandleClick2 = (name)=>{
        alert("button 2 clicked; name ="+name);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className="btn btn-primary mx-1" onClick={this.LncEvenHandleClick1}>button 1</button>
                <button className="btn btn-success mx-1"
                    onClick={()=>this.LncEvenHandleClick2}>button 1</button>
            </div>
            
        );
    }
}

export default LncClassCompEvent1;