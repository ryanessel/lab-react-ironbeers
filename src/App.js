import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
    
    <Navbar />
    

    <Routes>
      <Route path={`/`} element={<HomePage/>}/>
      <Route path={`/beers`} element={<Beers/>}/>
      <Route path={`/beers/:id`} element={<BeerDetails/>}/>
      <Route path={`/random-beer`} element={ <RandomBeer />}/>
      <Route path={`/new-beer`} element={<NewBeer />}/>

    </Routes>


 
    


    </div>
  );
}

export default App;
