// function Testt(){
//     function display(){
//         alert("Welcome to event concept on ReactJs")
//     }
//     return(
//         <div>
//             <button onDoubleClick={() => alert("Welcome")}>Click</button>
//         </div>
//     )
// }
// export default Testt;




// import { useState } from "react";

// function Testt(){
//     let [counter,updateCounter]=useState(0)
//     return(
//         <div>
//             <h2>Counter variable value is {counter}</h2>
//             <button onClick={()=>updateCounter(++counter)}>Increment</button>
//             <button onClick={()=>updateCounter(--counter)}>Decrement</button>
//         </div>
//     )
// }
// export default Testt;





import { useState } from "react";

function Testt(){
    let [Name,updateName]=useState("Siddharth")
    return(
        <div>
            <h2>Student name is {Name}</h2>
            <button onClick={()=>updateName("Siddharth Misal")}>Change_Name</button>
        </div>
    )
}
export default Testt;