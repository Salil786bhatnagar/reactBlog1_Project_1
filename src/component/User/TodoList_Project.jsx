import React,{useState} from 'react'
import TodoList from './TodoList';
export default function TodoList_Project() {
      const [getData, setData]= useState("");
      const [getList, setList] = useState([]);
      const showData=(event)=>{
        setData(event.target.value)
      }
      
    const clickHandel=()=>{
        setList((oldItem)=>{
            return[...oldItem, getData];
        })
        setData("");
    }

    const deleteItem=(id)=>{
     console.log("delete item")
     setList ((oldItem)=>{
          return oldItem.filter((arrElem, index)=>{
            return index!==id;
          })
     })
 }  

    return (
        <div className='maiDiv'>
             <div className='cosondDiv'>
               <span><h3>Todo List</h3></span>
               <tr>
                   <td><input onChange={showData} type="text" placeholder='Enter the value' value={getData} /></td>
                   <td><button onClick={clickHandel}> + </button> </td>
               </tr>
                <p className='pData'>
                  <ul>
                     {
                        getList.map((listofData, index)=>{
                           return(
                                  <TodoList 
                                  key={index}
                                  id={index}
                                  text={listofData}
                                  onSelect={deleteItem}/>
                           ) 
                        })  
                      }
                  </ul>
                </p>
             </div>     
        </div>
    )
}
