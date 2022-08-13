import React,{useState} from 'react'

    const ReactEvent=()=> {
        const bgColore = "green";
        const bgColore1 = "#CAc24c";
        const [getBgColor, setBgColor]= useState(bgColore);
        const [ChnageName, setChangeName] = useState("Click Me")

        const changeData=()=>{
        let changeBgc = "blue";
           setBgColor(changeBgc); 
           setChangeName("Submit Data 🔥");
           
        }

        const changButton=()=>{
         let changeBgc = "yellow";  
         setBgColor(changeBgc);  
         setChangeName("yooo 🤧");
        }

    return (
        <div style={{backgroundColor:getBgColor}}>
            {/* <button onClick={changeData} onDoubleClick={changButton}>{ChnageName}</button> */}
            <button onMouseOver={changeData} onMouseOut={changButton}>{ChnageName}</button>
        </div>
    )
}
export default ReactEvent