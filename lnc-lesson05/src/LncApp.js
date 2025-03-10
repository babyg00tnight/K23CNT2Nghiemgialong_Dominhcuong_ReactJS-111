import React, { Component } from "react";
import LncFuncEvent1 from "./components/LncFuncEvent1";
import LncClassCompEvent1 from "./components/LncClassCompEvent1";

class LncApp extends Component {
    render() {
        return (
            <div className='container border mt-3'>   
                <h1 className='text-center alert alert-infor my-2'>k23 long va cuong - Event and Form</h1>
                <hr/>
                <div>
                    <h2>function components - Event </h2>
                </div>
                <LncFuncEvent1 />
                <hr/>
                <div>
                    <h2>
                        class components - Event
                    </h2>
                    <LncClassCompEvent1 />
                </div>
            </div>

        )
    }
}
export default LncApp;