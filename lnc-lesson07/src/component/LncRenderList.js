import React from "react";

export default function LncRenderList.js)() {
    const lncList = ["long va cuong"];
            
    return (
        <div className=" alert alert-success">
            <h2>danh sach:</h2>
            {
                lncList.map(item=>{
                    return <li>{item}</li>
                })
            }    
        </div>
    )
}