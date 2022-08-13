import React,{useState} from 'react'

const Count=()=> {
    const [CountN, setCountN]=useState(0);
    // const [CountD, setCountD]=useState(0);
    const incNum=()=>{
        setCountN(CountN+1)
        
    }
    const decNum=()=>{
       if(CountN>0){
        setCountN(CountN-1)
       } else{
          setCountN(0); 
          alert("Zero limit is Reached...");
       }
        
        
    }
    // const useData2=()=>{
    //     setCountD(CountD-1)
    // }
    return (
        <div style={{textAlign:'center'}}>
            <h1>{CountN}</h1> 
            <button className="btn btn-success p-2 m-2 text-dark" onClick={incNum}>Increment</button>
             &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-light p-2 m-2 text-dark' onClick={decNum}>Decriment</button>
            {/* <span>&nbsp; <h1>{CountD}</h1></span> 
            <button onClick={useData2}>Decriment</button> */}

        </div>
    )
}

export default Count;