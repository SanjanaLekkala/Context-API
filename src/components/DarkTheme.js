import React, {  useContext } from "react";
import { DarkThemeContext } from "../context/DarkTheme";
import "../App.css"


const DarkTheme =()=>{
    const {toggle,toggleDarkMode} = useContext(DarkThemeContext);
    const handleClick=()=>{
        toggleDarkMode();
    }
    return(
        <div className={toggle ? `Container Container-dark` : `Container Container-light`}>
            <button className="switch" onClick={handleClick}>Switch</button>

        </div>
    )
}

export default DarkTheme;