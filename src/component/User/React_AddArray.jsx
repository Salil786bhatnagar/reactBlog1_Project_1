import React,{useState,useEffect} from 'react'

export default function NameList() {
    const [getData, setData]=useState([]);

	// const names = ['Bruce', 'Clark', 'Diana','salil']

    const alphabates = ['a','b','c','d','e','f','g','h','i','j','k','l'];
  

    return (
    	<div>
          {/* {names.map(name => <h2>{name}</h2>)} */}
          {alphabates.map(showData=><h5>{showData}</h5>)}

      	</div>
    )
}
