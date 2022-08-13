import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function AxiosApi() {
    // https://fakestoreapi.com/products/category/jeweleryhttps://fakestoreapi.com/products/category/jewelery
 const [getNum, setNames] = useState()
 const [moves, setMoves] = useState()

 useEffect(()=>{
     async function showData() {
         const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getNum}`);
         console.log("pokemonData",result.data.name);
         setNames(result.data.name);
         setMoves(result.data.moves.length)
     }
     showData();
 });

    return (
        <div>
       
        <h3>You choose<span style={{color:'skyblue'}}>&nbsp;{getNum}</span>&nbsp;val</h3>
        <h2>My name is<spna style={{color:'red'}}>&nbsp;</spna></h2>
        <h4>I have<spna style={{color:'blue'}}>{moves}</spna> moves</h4>

            <select value={getNum} onChange={(e)=>{setNames(e.target.value)}}>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}
