import React from "react";

export default function LncFuncEvent1() {

    //ham xu ly su kien
    const lncEventButton1Click = () => {
        alert("Button 1 - clicked");
    }

    const lncEventButton2Click = () => {
        alert("button2 - clicked")
    }
    const lncEventButton3Click = (name)=>{
        alert("name:" + name)
    }
    return (
        <div className='alert alert-info'>
            <button className="btn btn-primary" onClick={lncEventButton1Click()}>
                button 1
            </button>
            <button className="btn btn-success mx-1" onClick={lncEventButton2Click}>
            button 2
            </button>
            <button className="btn btn-success" onClick={lncEventButton3Click("long va cuong")}>
            button 3
            </button>
            <button className="btn btn-success mx-1" onClick={()=>lncEventButton3Click("long va cuong")}>
            button 4
            </button>
            
            

        </div>
    )
}  