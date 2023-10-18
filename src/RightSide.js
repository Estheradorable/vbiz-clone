import React from "react";
import Arrow from "./img/ArrowArrow.png"
import "./NewDesign.css"
//import { Link } from "react-router-dom";

function RightSide() {
    return ( 
        <div className="container">
            <img src={Arrow} alt="Arrow" className="arrow"/>
            <div className="wrapper">
                <div className="login-text">
                  <p>Log in</p>
                </div>
                <div className="bodytext">
                     <p className="body--text">Fill in all the required information below to login</p>
                </div>
                <form className="form">
                    <div className="username">
                       <input type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="forgot-pass">
                        <p className="forgot">I forgot the password</p>
                    </div>
                    <div>
                       <button className="btn">Log in</button>
                    </div>
                </form>
                <div className="open-account">
                  <p className="open-text">Don't have an account?<span>Open Account</span></p>
               </div>
            </div>
        </div>
     );
}

export default RightSide;