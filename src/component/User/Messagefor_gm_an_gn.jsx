import React from 'react'

const cssStyle = {
  
}

// min project alet wish in gm,fn,gn...
let currentData = new Date();
let showData = " ";
currentData = currentData.getHours();
if(currentData>=1 && currentData < 12){
  showData = "Good Morning...";
  cssStyle.color="green";
}else if(currentData>=12 && currentData < 19){
  showData = "Good After Non...";
  cssStyle.color="orange";
}else{
  showData = "Good Night...";
  cssStyle.color="gray";
}



export default function Messagefor_gm_an_gn() {
    return (
        <div>
             <h3 className="h3Classname">Hello Sir,&nbsp;&nbsp;<span style={cssStyle}>{showData}</span></h3>
        </div>
    )
}
