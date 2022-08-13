import React from 'react'
import Userarray_Data from './Userarray_Data';

export default function Showdata_API() {
      
        function S_Data(result){
            return(
                <>
                    <span>User Image:&nbsp;{result.Img}</span><br/>  
                    <span>Name:&nbsp;{result.Name}</span><br/> 
                    <span>CollegeName:&nbsp;{result.CollegeName}</span><br/> 
                    <span>Address:&nbsp;{result.Address}</span><br/> 
                    <span>Contact:&nbsp;{result.Contact}</span><br/> 
                     <br/>
                     <hr/>
                </>
            )
        }
     
    return (
        <div>
           {Userarray_Data.map(S_Data)}
        </div>
    )
}
