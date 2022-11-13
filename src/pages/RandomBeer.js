import axios from "axios";
import { useState, useEffect } from "react";


 function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState()
  const [click, setClick] = useState(0)

  useEffect(()=> {

    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((response) => {
      console.log(response.data)
      setRandomBeer(response.data)

    })
    .catch((err)=> console.log(err))


  }, [click])




  return (
    <div className='RandomBeer'>
        
        <h1>RandomBeer</h1>
        {/* {!randomBeer && <h3>no beer found</h3>} */}


        {randomBeer && (

            <div>

<div>need api call to get random beer</div>
        {randomBeer.name}

      
        {randomBeer.name}
{console.log(randomBeer.name)}

<div>
<img className='beerImg' src={randomBeer.image_url} alt="" srcset="" />
</div>


<div className='description'>

{randomBeer.description}

</div>


<button onClick={()=> setClick(click + 1)}></button>
       
     

            </div>

         


        )}
        
    </div>
  )
}


export default RandomBeer;