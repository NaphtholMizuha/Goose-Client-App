import React from "react";
import { Outlet } from "react-router-dom";

export default class Home extends React.Component{
    render(){
        return( 
        <div className="homepage">
            <div className="body">
                <Outlet/>
            </div>
        </div>
        )
    }
}