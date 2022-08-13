import React,{useState} from 'react'

const Reactevent_Form1=()=> {
    const [getClick, setClick]=useState("Click Me 🔏");
    const [getValue, setValue]=useState("");
    const [getFullName, setFullName]=useState("");
    const showName=(event)=>{
        setValue(event.target.value);
        console.log("clicked", event.target.value);
    }
    const onSubmit=()=>{
        setFullName(getValue)
        setClick("submit... 😃 ");
    }
    return (
        <div>
               <h1>Hello,&nbsp;<span style={{color:'steelblue'}}>{getFullName}</span> </h1>
               <input onChange={showName} type="text" value={getValue} placeholder="Enter the value" />
               <button onClick={onSubmit}>{getClick}</button>
        </div>
    )
}

export default Reactevent_Form1;
