import { useState, useEffect } from 'react';

import './Forecast.css';
import moment from "moment";

export default function Forecast({city}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    const topBox = {
        display: 'flex',
        width: '1290px',
        height: '255px',
        border: '2px solid gray',
        padding: '50px',
        margin: '30px 50px 75px 2px',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    useEffect(() => {

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=14`)
            .then(res => res.json())
            .then(
                (jsonifiedResponse) => {
                    setIsLoaded(true);
                    setItems(jsonifiedResponse);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [city])

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='container'>
                  <div style={topBox} className='container bg-info'>
                    <div>
                        <h1>{city} </h1><br />
                        <h3>{items.current.condition.text}</h3>
                        <p>{moment(items.location.localtime).calendar()}</p>
                    </div>
                    <div>
                        <img src={items.current.condition.icon} alt="conditionIcon" className="img-fluid"  />
                        <h2>{items.current.temp_f} F</h2>
                    </div>
                  </div>    
                  <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar inline-block mt-15">
                        <table  className="table table-striped table-light">
                           <thead>
                                <tr>
                                    <th scope="col" className='h4 header'>Days</th>
                                    <th scope="col" className='h4 header'>Max Temp</th>
                                    <th scope="col" className='h4 header'>Min Temp</th>
                                    <th scope="col" className='h4 header'>Condition</th>
                                    <th scope="col" className='h4 header'>Precip</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.forecast.forecastday.map((i) => 
                                    <tr>
                                        <td>
                                            {moment(i.date).format('ll')}
                                        </td>
                                        <td>
                                            {i.day.maxtemp_f}
                                        </td>
                                        <td>
                                            {i.day.mintemp_f} 
                                        </td>
                                        <td>
                                            <img src={i.day.condition.icon} alt="conditionIcon" />
                                            {i.day.condition.text} 
                                        </td>
                                        <td>
                                            {i.day.totalprecip_mm} 
                                        </td>
                                        
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
}
