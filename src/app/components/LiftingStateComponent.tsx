
// import React, { useState } from 'react'
// interface setAmount {
//     setAmount: () => void;
// }
// export default function LiftingStateComponent() {
//     const [amount, setAmount] = useState(0);

//   return (
//     <div>
//         <ChildrenA setAmount = {() => setAmount}/>
//         <ChildrenA amount = {() => setAmount}/>

//     </div>
//   )
// }

// function ChildrenA(setAmount : (amount) => setAmount() => void){
//     return(
//         <button onClick={(setAmount)}>
//             Update Amount
//         </button>
//     )
// }

// function ChildrenB({amount} : amount){
//     return (
//         <h1>here is amount</h1>
//     )

// }
