// import { ImageAspectRatio } from 'material-ui-icons';
import React from 'react'

export default function Miniproject_netflix(props) {
    console.log("showData",props);
    return (
        <>
        <div className="cardMainClass">
          <div className="cards">
              <div className="card">
                  <img src={props.imgsrc} alt="" className="card_img" width="350px" height="350px" />
                  <div className="card_info">
                      <span className="card_category">{props.title}</span>
                      <h3 className="card_title">{props.sname}</h3>
                      <a href={props.link} target="_blank">
                          <button>Watch Now</button>
                      </a>
                  </div>
              </div>
          </div>  
          </div>  
        </>
    )
}
