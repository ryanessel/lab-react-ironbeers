import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




 function Beers() {
const [beers, setBeers] = useState([])




useEffect(()=> {
axios
.get("https://ih-beers-api2.herokuapp.com/beers")
.then((response) => {
   
    setBeers(response.data)
})

}, [])



  return (
    <div className='Beers'>
        
        
       <h1>Beers</h1> 
        
        {beers.map((beer) => 

            (
                <div className='beerListInfo'>

                    <img className='beerImg' src={beer.image_url}/>
                   <Link to={`/beers/${beer._id}`}>
                    <div> {beer.name}</div> 
                    </Link> 
                    <div> {beer.tagline}</div> 
                    <div> {beer.contributed_by}</div> 
                    <br></br>
                </div>

            )
        )}

    <div>list all beers from api</div>
        
    </div>
  )
}


export default Beers;