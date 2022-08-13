import React,{useContext} from 'react'
import { FirstName,LastName } from './ContextApi'

export default function ContexC() {
    const Fname = useContext(FirstName)
    const Lname = useContext(LastName)
    return (
       <>
        {/* <FirstName.Consumer>
          {(Fvalue)=>{
              return(
                  <>
                  <h1>Hello My {Fvalue} in it...</h1>  
                  </>
              )
          } }
         </FirstName.Consumer>   */}
         My Name Is: {Fname} {Lname}
      </>  

    )
}
