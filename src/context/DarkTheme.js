import React, { useState } from "react";
import { createContext } from "react";

const DarkThemeContext = createContext();

const DarkThemeProvider = (props)=>{

    const [toggle,setToggle] = useState(false);
    const toggleDarkMode = ()=>{
        setToggle(!toggle);
    }
    return(
        <DarkThemeContext.Provider value={{toggle,toggleDarkMode}}>
            {props.children}
        </DarkThemeContext.Provider>
    )
}

export  {DarkThemeContext,DarkThemeProvider};