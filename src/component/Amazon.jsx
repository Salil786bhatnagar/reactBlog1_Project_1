import React from 'react'
import Ndata from './User/Ndata';
import Cards from './Miniproject_netflix';
 const Amazon=()=>{
    return(
        <>
          <Cards
            key={Ndata[5].id}
            imgsrc={Ndata[5].imgsrc}
            title={Ndata[5].title}
            sname={Ndata[5].sname}
            link={Ndata[5].link}
          />
        </>
      );
}
export default Amazon;