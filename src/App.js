import React from 'react'
import './App.css';

import NavBar from './components/NavBar';
import backgroungImage from './components/bgImage.jpg'

const mainPage ={
  backgroundImage: `url(${backgroungImage})`, 
  backgroungRepeat:'no-repeat', 
  backgroundSize: 'cover', 
  height:'full'
}
function App() {
 
  return (
    <div style={mainPage}>
      <NavBar /> 
    </div>
  );
}

export default App;
