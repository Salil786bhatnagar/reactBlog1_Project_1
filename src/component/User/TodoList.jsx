import React from 'react'

 const TodoList=(props)=> {
    return (
            <>
            <div> 
                <li>
                <span>
                  <button
                   onClick={()=>{
                      props.onSelect(props.id) 
                   }}  
                   className='crosBtn'>X</button>{props.text}
                </span>
                
                </li>
            </div>    
            </>
    )
}
export default TodoList;