import React from 'react'
import { useLocation } from 'react-router-dom' 
export default function UseLocation() {
    const Location = useLocation();
    console.log("currentLocation:",Location);
    return (
        <div>
            <p>
                My Current Location is<span className='location'>{Location.pathname}</span>    
           </p>
        </div>
    )
}
