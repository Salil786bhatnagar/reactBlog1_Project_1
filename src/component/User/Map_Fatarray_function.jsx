import React from 'react'
const student = ['ram','gopal','sita','rahul']
const studentDetails = [
    {
        Name:'ram sharma', CollegeName:'Ips', Address:'Indore'
    },
    {
        Name:'gopal Tomar', CollegeName:'Gits', Address:'Gwalior'
    },
    {
        Name:'sita Varma', CollegeName:'Medicap', Address:'Indore'
    },
    {
        Name:'rahul Gupta', CollegeName:'IIt Ludki', Address:'Hydrabad'
    },
]
console.log("showData",studentDetails);
const showResult = studentDetails.map((result)=>{
   return (
         <>
           <ul>
               <li><span><u>Full Name</u>:&nbsp;</span>{result.Name}</li>
               <li><span><u>College Name</u>:&nbsp;</span>{result.CollegeName}</li>
               <li><span><u>Address</u>:&nbsp;</span>{result.Address}</li>
           </ul>
         </> 
       )
})
export default function Map_Fatarray_function() {
    return (
        <>
          {showResult}
        </>
    )
}
