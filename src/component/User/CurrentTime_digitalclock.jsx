import React,{useState} from 'react'

 const CurrentTime_digitalclock=()=> {
 let currentTime = new Date().toLocaleTimeString();    
 const [cTime, setCtime] = useState(currentTime)

 const showcurrentTime=()=>{
    let UpdatecurrentTime = new Date().toLocaleTimeString();  
    setCtime(UpdatecurrentTime);
 }
 
 setInterval(showcurrentTime, 1000);
    return (
        <div>
            <h1 style={{textAlign:'center',padding:'10px',color:'#CC12aa',position:'relative',top:'20%'}}>{cTime}</h1>
        </div>
    )
}
export default CurrentTime_digitalclock;