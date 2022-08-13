import React,{useState,useEffect} from 'react'

export default function UseEffectDemo() {
    const [getNum, setNum]=useState(0);

    useEffect(()=>{
        document.title=`the count value is ${getNum}... `
    })

    return (
        <div>
         <button onClick={()=>{setNum(getNum+1)}}>Click Now {getNum}</button>        
        </div>
    )
}
