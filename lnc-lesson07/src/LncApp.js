import React, { Component } from "react";
import LncLoginControl from "./component/LncLoginControl";

class  LncApp extends Component {
  render() {
    return ( 
      <div className='container border my-3'>
        <hi className='text center'> long va cuong - render condition, List key</hi>  
        <hr/>
        <LncLoginControl />
      </div>
    );
  }
}

export default LncApp;