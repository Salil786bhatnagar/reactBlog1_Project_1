import React from 'react'
import Ndata from './User/Ndata';
import Cards from './Miniproject_netflix';
 const Netflex=()=> {
    return(
        <>
          <Cards
            key={Ndata[1].id}
            imgsrc={Ndata[1].imgsrc}
            title={Ndata[1].title}
            sname={Ndata[1].sname}
            link={Ndata[1].link}
          />
        </>
      );
}

export default Netflex;