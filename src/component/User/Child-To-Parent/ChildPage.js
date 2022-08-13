import React from 'react'

export default function ChildPage(props) {
   let data = "Ram Sharma";
  return (
    <div>
       ChildPage
        <hr/>
        {/* {props.name} */}
        <button onClick={()=>props.alert(data) }>Click Me</button>
  </div>
  )
}
