import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
export default function User_reduxfile() {
    return (
      <> 
        <div className='container'>
               <h1>Increment/Decrement Counter</h1>
               <h4>using React and Redux</h4>  
               <div className='quantity'>
                 <a className='quantity_minus' title='Decrement'><span style={{color:'#fff'}}><RemoveIcon/></span></a>
                 <input name='quantity' type='text' className="quantity_input" value="0"/>
                 <a className='quantity_plus' title='Increment'><span style={{color:'#fff'}}><AddIcon/></span></a>
               </div>
        </div>
      </> 
    )
}
