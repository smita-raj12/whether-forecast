import React from 'react'
import './App.css';
import Forecast from './Forecast';

function App() {
  const cities = ["Reno NV", "Austin TX", "Tampa, Fl"]
  
  return (
    <>
    {cities.map((city) => {
      return <Forecast city={city}/>
    }
    
    )}
   
    </>
  )
}

export default App;
