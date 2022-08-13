import React from 'react'

 const Reducefunction=()=> {
     const arr = [3,5,23,44,53];
     const sum = arr.reduce((accumulator, currentvalue)=>{
         return accumulator + currentvalue 
     },5)//initialvalue
    return (
        <div>
            <span>Totol Number:&nbsp;<span style={{display:'inline-block'}}><h3><b><u>{sum}</u></b></h3></span></span>
        </div>
    )
}
export default Reducefunction;

//syntex.