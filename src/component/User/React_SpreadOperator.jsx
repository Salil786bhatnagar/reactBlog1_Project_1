import React from 'react'

export default function React_SpreadOperator() {
    //   const FullName = ["salil","Bhatnagar"];
    //   const Biodata = [26, ...FullName, 'Male', 'Indore'];
    //   document.write(FullName);
    //   document.write("<br/>");
    //   document.write(Biodata);

    const GameDetails = ["mario","Samuraye",'motercomback...','kkr'];
    const [first, ...remainingData] = GameDetails; //Data stracturing


    // const FullName={
    //     fname:'ram',
    //     lname:'sharma'
    // }
    // const biodata={
    //     id:2,
    //     ...FullName,
    //     age:22,
    //     gender:'M',
    //     address:'Gwalior(M.P)'
    // }
    console.log("showGameData:-",first);
    console.log("RemainingData:",remainingData )
    return (
      <>  
        <div id="demo"></div>
        <p id="demo1"></p>
      </>   
    )
}
