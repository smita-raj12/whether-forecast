import React from 'react'
import './App.css';
import TexasForecast from './TexasForecast';

function App() {
  const cities = ["Reno NV", "Austin TX", "Tampa, Fl"]
  
  return (
    <>
    {cities.map((city) => {
      return <TexasForecast city={city}/>
    }
    
    )}
   
    </>
  )
}

export default App;
