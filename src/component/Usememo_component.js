import React,{useState,useMemo} from 'react'

export default function Usememo() {
    const [count, setCount]=useState(0);
    const [item, setItem]=useState(1);

    const multipleCount=useMemo(function countHandle(){
      console.warn("countHandle")
      return count*5;
    },[count])

  return (
    <div style={{textAlign:'center'}}>
        Usememo
        <br/>
        <span>{count}</span><br/>
        <span>{item}</span><br/>
        <spna>{multipleCount}</spna>
        <hr/>
    <span><button onClick={()=>{setCount(count+1)}}>Click Count</button></span><br/><br/>
    <span><button onClick={()=>{setItem(item*10)}}>Click Item</button></span><br/><br/>
    </div>
  )
}
