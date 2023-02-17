import React, {useEffect} from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar';
import Forecast from './components/Forecast';

function App() {
 
  const cities = ["Reno NV", "Austin TX", "Tampa Fl"]
  
  return (
    <div style={{}}>
    <NavBar cities={cities}/> 
      <Routes>
      
       <Route path="/Forecast" element={ cities.map((city) => <Forecast city={city} />)}  />
       
      </Routes>
      
    </div>
  );
   

 
}

export default App;
