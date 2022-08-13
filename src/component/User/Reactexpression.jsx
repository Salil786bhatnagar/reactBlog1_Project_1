import React from 'react'
const heading = {
    color:'red',
    textAlign:'center'
  }
const fullName    = "salil Bhatnagar";
const Address     = "House No p-373 p-block shatabdi puram near world kids school."
export default function Reactexpression() {
    return (
        <div>
             <h4 style={heading}>My Name is {fullName}</h4>
             <address>
                <span> <b><u>My Address is:-</u></b></span>{Address}
             </address>
        </div>
    )
}
