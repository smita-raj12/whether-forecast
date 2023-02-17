import React, { useState } from 'react'

import Forecast from './Forecast';

function NavBar() {
     
    const [city1, setCity1] = useState("Reno NV");
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
                <div className="container-fluid">
                    <div className="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-cloud-rain" viewBox="0 0 16 16">
                        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
                    </svg>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="mx-auto">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button  className="btn shadow-none  btn-sm" onClick={() => setCity1("Reno NV")}>
                                        <span className="h3 text-white">Reno</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn shadow-none  btn-sm"  onClick={() => setCity1("Austin TX")}>
                                        <span className="h3 text-white">Austin</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn shadow-none  btn-sm" onClick={() => setCity1("Tampa Fl")}>
                                        <span className="h3 text-white">Tampa</span>
                                    </button>
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