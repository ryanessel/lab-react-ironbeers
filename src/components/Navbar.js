import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

 
function Navbar() {

    const [show, setShow] = useState(true);

  return (
    <div className='Navbar'>

{/* {show ? "HOME STUF FBELOW" : ""} */}
  　<Link  className='NavLinks' to={`/`}>
     🏡
    </Link>

    <Link className='NavLinks' to={`/beers`}>
      BEERS
    </Link>
    <Link className='NavLinks' to={`/random-beer`}>
      RANDOM BEER
    </Link>
    <Link className='NavLinks' to={`/new-beer`}>
      ADD NEW BEER
    </Link>
    

    </div>
  )
}


export default Navbar;