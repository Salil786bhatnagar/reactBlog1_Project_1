import React from 'react'
import Ndata from './Ndata'

const dataList=()=>{
   return( 
    Ndata.map((val,index)=>{
        console.log("data.....",val.sname);
       return(
               <div className="cardMainClass">
                <div className="cards">
                <div className="card">
                <input type="hidden" value={val.id} />
                <img src={val.imgsrc} alt="" className="card_img" width="350px" height="350px" />
                <div className="card_info">
                    <span className="card_category">{val.title}</span>
                    <h3 className="card_title">{val.sname}</h3>
                    <a href={val.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                   </div>
               </div>
           </div>  
        </div> 
       ) 
       
    })
   ) 
}
export default function MinisecondProject() {
    return (
        <div>
            {dataList()}
        </div>
    )
}
