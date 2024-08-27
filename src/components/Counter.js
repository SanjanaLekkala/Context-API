import React, {  useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = ()=>{
    const counter = useContext(CounterContext);
    console.log(counter)
    const Styles={
        color:"red"
    }
    return(
        <div >
            <button style={Styles} onClick={()=>{counter.setCount(counter.count+1)}}>Increment</button>
            <button style={Styles} onClick={()=>{counter.setCount(counter.count-1)}}>Decrement</button>
        </div>
    )
}

export default Counter;