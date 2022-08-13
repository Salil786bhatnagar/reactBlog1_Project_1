import React,{useState} from 'react'

const Reactevent_Form1=()=> {
    const [getClick, setClick]=useState("Click Me 🔏");
    const [getName, setName]=useState("");
    const [getLastName, setLastName]=useState("");
    const [getFullName, setFullName]=useState("");
    const [getFullLastName, setFullLastName]=useState("");
    
    const showName=(e)=>{
          setName(e.target.value);
        //   console.log("clicked", e.target.value);
    }
    const showLastName=(e)=>{   
        setLastName(e.target.value);
      //   console.log("clicked", e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        setFullName(getName)
        setFullLastName(getLastName);
        setClick("submit... 😃 ");
    }
    return (
        <>
    <h1>Hello,&nbsp;<span style={{color:'steelblue'}}>{getFullName}</span>&nbsp;
         <span style={{color:'yellowgreen'}}> {getFullLastName}</span></h1>
            <div>
                <form onSubmit={onSubmit}>  
                <table>
                 <tr>
                   <td>
                   <input onChange={showName} type="text" value={getName} placeholder="Enter the value" />
                   </td>
                 </tr>
                 <tr>
                  <td>
                    <input onChange={showLastName} type="text" value={getLastName} placeholder="Enter the value" />
                  </td>
                 </tr>
                 <tr>
                   <td>
                     <button type="submit">{getClick}</button>
                   </td>
                 </tr>
                </table>
                </form>   
            </div>
        </>    
    )
}

export default Reactevent_Form1;
