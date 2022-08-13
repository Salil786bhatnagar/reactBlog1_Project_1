import React, { createContext } from 'react'
import ContextA from './ContextA'
const FirstName = createContext();
const LastName = createContext();
export default function ContextApi(){
    
    return (
       <>        
        <FirstName.Provider value={'Salil'}>
            <LastName.Provider value={'Bhatnagar'}>
                <ContextA/>
            </LastName.Provider>
        </FirstName.Provider>
      </>  
    );
}
export {FirstName,LastName}