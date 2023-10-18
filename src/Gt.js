import React from "react";
import "./Gt.css";
import Nezuko from "./images/Nezuko.png"
import Tanjiro from "./images/Tanjiro.png"
import Zenitsu from "./images/Zenitsu.png"
import Tomioka from "./images/Tomioka Giyu.png"
import Logo from "./images/Logo.png"
import DemonSlayer from "./images/Demon Slayer.png"

function Gt() {
    return (
        <div className="Gt">
            <div>
                <img src={DemonSlayer} alt="DemonSlayer" />
            </div>
            <div style={{ display: "flex" }}>
                <div className="Nezukodiv" >
                    <img width={500} height={500} src={Nezuko} alt="Nezuko" />
                </div>
                <div className="Tanjirodiv">
                    <img width={500} height={500} src={Tanjiro} alt="Tanjiro" />
                </div>
                <div className="Zenitsudiv">
                    <img width={500} height={500} src={Zenitsu} alt="Zenitsu" />
                </div>
                <div className="Tomiokadiv">
                    <img width={500} height={500} src={Tomioka} alt="Tomioka" />
                </div>
            </div>
            <div>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}
export default Gt;