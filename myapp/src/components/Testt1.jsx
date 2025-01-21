import { useState, useEffect } from "react";

function Testt1(){
    const [count, updateCounter]= useState(0)
    useEffect(()=>{console.log("CLICKED")},[count])
    return(
        <div>
            <center>
                <h1>{count}</h1>
                <button onClick={()=>updateCounter(count+1)}>Click</button>
            </center>
        </div>
    )
}
export default Testt1;