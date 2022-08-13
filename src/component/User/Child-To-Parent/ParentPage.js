import React,{useState, useEffect} from 'react'
import Child from './ChildPage'
export default function ParentPage() {
    // const data = 'ram sharma';

    function parentAlert(data){
     alert(data)
    }

  return (
    <div>
        <h3 style={{textAlign:'center'}}>ParentPage</h3>
        <hr/>
        {/* <h5><Child name={data}/></h5> */}
        <h5><Child alert={parentAlert}/></h5>
   </div>
  )
}
