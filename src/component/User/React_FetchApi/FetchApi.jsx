import React,{useState, useEffect} from 'react'

 const FetchApi=()=> {
 const [getData, setData]= useState([]);


 useEffect(()=>{
    const FetchApi = async()=>{
      // const getApi = await fetch("https://api.covid19api.com/summary");
    const getApi = await fetch("https://api.covid19api.com/summary");
    const showResult = await getApi.json();
    console.log("showfetchApi",showResult);
    setData(showResult.Countries) ;
  }
  FetchApi()
 },[]);

 const getDataList=()=>{
   return(
       getData.map((val)=>{
         return(
             <div className='divClass'>
                <ul>
                 <li><span className='spanClass'>Country:&nbsp;&nbsp;</span><span className='showName'>{val.Country}</span></li>
                 <li><span className='spanClass'>Country Code:&nbsp;&nbsp;</span><span className='showName'>{val.CountryCode}</span></li>
                 <li><span className='spanClass'>Slug:&nbsp;&nbsp;</span><span className='showName'>{val.Slug}</span></li>
                 <li><span className='spanClass'>NewConfirmed:&nbsp;&nbsp;</span><span className='showName'>{val.NewConfirmed}</span></li>
                 <li><span className='spanClass'>Total Confirmed:&nbsp;&nbsp;</span><span className='showName'>{val.TotalConfirmed}</span></li>
                 <li><span className='spanClass'>New Deaths:&nbsp;&nbsp;</span><span className='showName'>{val.NewDeaths}</span></li>
                 <li><span className='spanClass'>Total Deaths:&nbsp;&nbsp;</span><span className='showName'>{val.TotalDeaths}</span></li>
                 <li><span className='spanClass'>New Recovered:&nbsp;&nbsp;</span><span className='showName'>{val.NewRecovered}</span></li>
                 <li><span className='spanClass'>Total Recovered:&nbsp;&nbsp;</span><span className='showName'>{val.TotalRecovered}</span></li>
                 <li><span className='spanClass'>Date:&nbsp;&nbsp;</span><span className='showName'>{val.Date}</span></li>


                 {/* <li><span className='spanClass'>TotalRecovered:&nbsp;&nbsp;</span>{val.TotalRecovered}</li>
                 <li><span className='spanClass'>Date:&nbsp;&nbsp;</span>{val.Date}</li> */}
                </ul>
                <hr/>
             </div>
         )
       })
   )
}

  
    return (
        <>
          <h2 className='covidClass'><b><u>Covid19 Global India</u></b></h2>
           {getDataList()}
        </>
    )
}

export default FetchApi;
