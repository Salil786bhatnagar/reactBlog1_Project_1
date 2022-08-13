import React from 'react'
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString(); 
export default function Currentdate_time() {
    return (
        <div>
            <p>
            <span><b><u>Today Date:-</u></b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{CurrentDate}
            <br/><br/>
            <span><b><u>Current TIme:-</u></b></span>&nbsp;{CurrentTime}
           </p>
        </div>
    )
}
