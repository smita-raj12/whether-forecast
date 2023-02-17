import { useState, useEffect } from 'react';


export default function Forecast({city}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    // let dates = [];

   
    const topBox = {
        display: 'flex',
        width: '1290px',
        border: '2px solid gray',
        padding: '50px',
        margin: '25px 50px 75px 2px',
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
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className='container'>
                  <div style={topBox} className='bg-info'>
                    <div>
                        <h1>{city} </h1><br />
                        <h3>{items.current.condition.text}</h3>
                    </div>
                    <div>
                        <img src={items.current.condition.icon} alt="conditionIcon" style={{height:'60px', width:'45px'}} />
                        <h2>{items.current.temp_f} F</h2>
                    </div>
                  </div>    
                   
                    <div>
                        <table  className="table table-bordered">
                           <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Days</th>
                                    <th scope="col">Max Tem</th>
                                    <th scope="col">Min Tem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.forecast.forecastday.map((i) => 
                                    <tr>
                                        <td>
                                            {i.date}
                                        </td>
                                        <td>
                                            {i.day.maxtemp_f}
                                        </td>
                                        <td>
                                            {i.day.mintemp_f} 
                                        </td>
                                    </tr>
                                )}
                               </tbody>
                            </table>
                        {/* <p>{items.forecast.forecastday.map((val) => val.day.maxtemp_f)}</p>  */}
                    </div>
                </div>
            );
        }
}
