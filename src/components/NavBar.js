import React from 'react'
import Forecast from './Forecast.js';

function NavBar() {
    // console.log(city);
    const cities = ["Reno NV", "Austin TX", "Tampa, Fl"]

    const boxStyle= {
        display: 'flex',
        flexDirection:'row'
    }
    return (
          <div class="container" style={boxStyle}>
                {cities.map((city) => {
                return (
                    <Forecast  city={city}/>
                )})}
               
                   
           </div>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#Forecast" name="Forecast" id= "Forecast">Reno</a>
//          <Forecast name="Forecast"/>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/">Austin</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/">Tempa</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
    ); 
}

export default NavBar