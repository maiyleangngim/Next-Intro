"use client"
import { useState } from "react";
export default function AddToCardComponent(){

    // creation state
    // state, functionUpdateState, intitailize value
    //     |         |               |
    const [count, setCount] = useState(0);
    // update state value
    // setCount(count+1);
    return (
        <>
        
        <h1>Card: {count}</h1>
        <button className="border p-4 rounded" onClick={()=> setCount(count + 1)}>Add to Cart</button>
        </>
    )
}