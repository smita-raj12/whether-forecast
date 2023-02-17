import React, { useState } from 'react'

import Forecast from './Forecast';

function NavBar({cities}) {
    


     const [city1, setCity1] = useState("");
    
    return (
    <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <button to="Forecast" class="nav-link"  onClick={() => setCity1("Reno NV")} style={{border: 'none'}}>Reno</button>
          {console.log("Reno NV",city1)}
        </li>
        <li class="nav-item">
          <button class="nav-link" to="Forecast" onClick={() => setCity1("Austin TX")} style={{border: 'none'}}>Austin TX</button>
          {console.log("Austin TX",city1)}
        </li>
        <li class="nav-item">
          <button class="nav-link" to="Forecast" onClick={() => setCity1("Tampa Fl")} style={{border: 'none'}}>Tampa</button>
          {console.log("Tampa Fl",city1)}
        </li>
      </ul>
    </div>
  </div>
</nav>
 {city1 && <Forecast city={city1}/>} 
</div>
); 
}

export default NavBar