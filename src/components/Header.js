import React from "react";
import logo from "../images/logo.png";
import Aboutme from "./Aboutme";
import Contacto from "./Contacto";
import Web from "./Web";

function Header () {
    return(
        <div style={{ height: "100px" }}>
            <div className="logo">
                <img className="imgLogo" src={logo} alt="" />
                <Web />
            </div>
            <Aboutme />
            <Contacto />
        </div>
    )
    
}
export default Header;