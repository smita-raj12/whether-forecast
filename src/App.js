import React from 'react'
import './App.css';

import NavBar from './components/NavBar';
import backgroungImage from './components/bgImage.jpg'

function App() {
 
  return (
    <div style={{backgroundImage: `url(${backgroungImage})`, backgroungRepeat:'no-repeat', backgroundSize: 'cover', height:'100%'}}>
      <NavBar /> 
    </div>
  );
}

export default App;
