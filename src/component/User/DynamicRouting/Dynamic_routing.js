import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Dynamic_routing() {
    const user=[
             {id:1, name:'ram',email:'ram@gmail.com','contact':9876543098},
             {id:2, name:'ravi',email:'ravi@gmail.com','contact':8765678954},
             {id:3, name:'gopal',email:'gopal@gmail.com','contact':8765678345},
             {id:4, name:'rahul',email:'rahul@gmail.com','contact':8709876543},
             {id:5, name:'salil',email:'salil@gmail.com','contact':8711223344},
             {id:6, name:'mohan',email:'mohan@gmail.com','contact':8456784321},
            ]
  return (
    <div>
       <h1 style={{textAlign:'center'}} >Dynamic routing</h1>
         {
           user.map((item)=>
             
                   <>
                      <a href={"/user"+item.id}><h5>{item.name}</h5></a>
                   </>
            
           )
         }
    </div>
  )
}
