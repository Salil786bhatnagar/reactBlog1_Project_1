import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  const[covidAPI, setCovidApi]    = useState([]);
  const[productAPI,setProductApi] = useState([]);
  const[pokemonAPI,setPokemonApi] = useState([]);

    const fetchData=()=>{
    const covid_API   = "https://api.covid19api.com/summary";
    const product_API = "https://dummyjson.com/products";
    const pokemon_API = "https://pokeapi.co/api/v2/pokemon";

    const getCovidApi   = axios.get(covid_API);
    const getProductApi = axios.get(product_API);
    const getPokemonApi = axios.get(pokemon_API);

      axios.all([getCovidApi,getProductApi,getPokemonApi]).then(
      axios.spread((...alldata)=>{

        const allDataCovidApi   = alldata[0]
        const allDataProductApi = alldata[1]
        const allDataPokemonApi = alldata[2]

        console.log("CovidData",allDataCovidApi);
        console.log("ProductData",allDataProductApi); 
        console.log("PokemonApi",allDataPokemonApi); 

        setCovidApi(allDataCovidApi.data.Countries);
        setProductApi(allDataProductApi.data.products);
        setPokemonApi(allDataPokemonApi.data.results);

      })
    )
  }

  useEffect(()=>{
    fetchData();
   },[])

  //  use to Covie fetch Api

   const fetchCovidData=()=>{
    return(
        covidAPI.map((val)=>{
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
                 </ul>
                 <hr/>
              </div>
          )
        })
    )
 }
// end 

//  use Product Api Data

const fetchProductData=()=>{
  return(
        productAPI.map((item)=>{
          return(
          <div className='cart-main-page'>
            <div className='product-img'>
                 <span>
                     <img src={item.images[0]} width='100px' height='100px' />
                 </span>
             </div>
                 <div className='product-brand'>
                     <span>
                     <h6>Brand:{item.brand}</h6> 
                     </span>
                   </div> 
                   <div className='product-category'>
                     <span>
                     <h6>Category:{item.category}</h6> 
                     </span>
                   </div>     
                   <div className='product-price'>
                         <span>
                             <h6>Product Price:{item.price}</h6> 
                         </span>
                     </div>
               </div>
    
          )
        })
     )
}
 
  // end 

const fetchPokemonData = ()=>{
  return(
    pokemonAPI.map((item2)=>{
      return(
        <>
          <div>
             <div className='main-div'>
               
                <figure>
                  {/* <img src={item2.url} width="55px" height="55px"/> */}
                  <figcaption>
                  
                     <a href={item2.url}><small className='h5-name'>{item2.name}</small></a>
                  </figcaption>
                </figure>
             </div>
          </div>
        </>
      )
    })
  )
}  


  return (
    <div className={classes.root}>
     <div className='div-container'>
      <Grid container spacing={0}>
       
        <Grid item xs={3}>
          <div className='left-div'>
          <Paper className={classes.paper}>
          <h4>Covied Data</h4><br/><hr/>
             <span className='detail-info'>
             {fetchCovidData()}
             </span>
          </Paper>
          </div> 
        </Grid>

        <Grid item xs={3}>
           <div className='right-div'> 
            <Paper className={classes.paper}>
            <h4>Pokemon Data</h4><br/><hr/>
              <span className='detail-info'>
                {fetchPokemonData()}
              </span>
            </Paper>
           </div>
        </Grid>
      
        <Grid item xs={6}>
           <div className='right-div'> 
            <Paper className={classes.paper}>
            <h4>Product Data</h4><br/><hr/>
              <span className='detail-info'>
               {fetchProductData()}
              </span>
            </Paper>
           </div>
        </Grid>
        
      </Grid>
    </div>
    </div> 
  );
}