import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 function NewBeer() {

//  const [img, setImg ] =useState('') 
const [ theName, setTheName ] =useState('')
const [ blurb, setBlurb ] =useState('')
const [firstMade, setFirstMade ] =useState('')
const [ attenLvl, setAttenLvl ] =useState('')
const [ descrip, setDescirp ] =useState('')
const [madeBy, setMadeby ] =useState('')

const naviagte = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  const body ={

  // image_url: img,
  name: theName,
  tagline: blurb,
  first_brewed: firstMade,
  attenuation_level:attenLvl,
  description: descrip,
  contributed_by: madeBy

  };

  axios
  .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
  .then((response) => {
    // setImg("")
    setTheName("")
    setBlurb("")
    setFirstMade("")
    setAttenLvl("")
    setDescirp("")
    setMadeby("")

    naviagte("/beers")

  })



}





  // image
  // name
  // tagline
  // first_brewed
  // attenuation_level
  // description
  // contributed_by
  
  return (
    <div className='NewBeer'>
        
        <h1>NewBeer</h1>
        
        <div>have api axios post form to add new beers to the api</div>

        <form onSubmit={handleSubmit}>
 
              <br />
            <label>name</label>
            <input
             type="text"
             name="name"  //used to be "headline"
             onChange={(e)=> {setTheName(e.target.value)}}
            value={theName}           
            />
              <br />
            <label>Tagline</label>
            <input
             type="text"
             name="tagline"  //used to be "headline"
             onChange={(e)=> {setBlurb(e.target.value)}}
            value={blurb}           
            />
              <br />
            <label>First Brewed</label>
            <input
             type="text"
             name="first_brewed"  //used to be "headline"
             onChange={(e)=> {setFirstMade(e.target.value)}}
            value={firstMade}           
            />
            <br />
            <label>Attenuation Level</label>
            <input
             type="number"
             name="attenuation_level"  //used to be "headline"
             onChange={(e)=> {setAttenLvl(e.target.value)}}
            value={attenLvl}           
            />
            <br />
            <label>Description</label>
            <input
             type="text"
             name="description"  //used to be "headline"
             onChange={(e)=> {setDescirp(e.target.value)}}
            value={descrip}           
            />
            <br />
            <label>Contributed By</label>
            <input
             type="text"
             name="contributed_by"  //used to be "headline"
             onChange={(e)=> {setMadeby(e.target.value)}}
            value={madeBy}           
            />
            <br />
          



















            <button type="submit">Add Beer</button>

        </form>




        
    </div>
  )
}


export default NewBeer;