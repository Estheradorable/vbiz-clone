import React from "react";
import './NewDesign.css'
import Logo from "./img/Logologo.png"
import RightSide from "./RightSide";


function LeftSide() {
    return ( 
        
        <div className="cover">
            <div className="logo">
              <img src= {Logo} alt='Logo'/>
            </div>
            <div className="body1">
              <h2>Welcome to</h2>
            </div>
            <div className="logo2">
              <img src= {Logo} alt='Logo'/>     
            </div>
            <div className="body2">
              <p className="body--2">The best solution for your business</p>
            </div>
            <RightSide/>
            

        </div>
     );
}

export default LeftSide;
