
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

 function BeerDetails() {
// the useParams variable needs to be named the same as the <Route path=":thisBit"
// this means that the variable must named be the same after : in the route path like above
// so if <Route path=":thisBit" element={<Example/>} /> then the variable mustbe named "thisBit" without the : of course 
    const {id} = useParams();
    const [beer, setBeer] = useState(null)
    console.log('alpha3Code', id)
    // const [beerId, setBeerId] = useParams();

    useEffect(() => {

        
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
    .then((response) => {
        console.log(response)
        setBeer(response.data)
    })

    }, [])

 

  return (
    <div>


{!beer && <h3>no beer found</h3>}
        <h1>BeerDetails</h1>
        <h3>BeerId: {id}</h3>


   {beer && (
<div> 

{beer.name}
{console.log(beer.name)}

<div>
<img className='beerImg' src={beer.image_url} alt="" srcset="" />
</div>

<div className='description'>

{beer.description}

</div>
</div>
     

        
)}       


       


      

    
{/* {thebeer && <BeerDetails theBeer={theBeer}} */}

    </div>
  )
}


export default BeerDetails;