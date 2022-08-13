import React,{useState} from 'react'

export default function Reverse() {
    

    let num = 1234;
    let revers = 0;
    document.write("original number:"+num+"<br/>")
    while(num!=0){
        revers = (revers * 10) + (num % 10);
        num = parseInt(num/10);
       
    }
    document.write("reverse number:"+revers)
      
    return (
        <div> 
          
        </div>
    )
}
