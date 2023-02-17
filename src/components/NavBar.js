import React, { useState } from 'react'

import Forecast from './Forecast';

function NavBar() {
     
    const [city1, setCity1] = useState("");
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
                <div class="container-fluid">
                    <div class="navbar-brand">Navbar</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="mx-auto">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <button to="Forecast" class="nav-link"  onClick={() => setCity1("Reno NV")} style={{border: 'none', width:'200px'}}>Reno</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" to="Forecast" onClick={() => setCity1("Austin TX")} style={{border: 'none', width:'200px'}}>Austin</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" to="Forecast" onClick={() => setCity1("Tampa Fl")} style={{border: 'none', width:'200px'}}>Tampa</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {city1 && <Forecast city={city1}/>} 
        </div>
    ); 
}

export default NavBar