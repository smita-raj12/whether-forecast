import { useState, useEffect } from 'react';

export default function Forecast({city}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
   
    console.log(city)
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
                <div style={{marginLeft:'100px'}}>
                  <div>
                    <p style={{fontSize: '30px'}}>{city} </p><br />
                    <p>Max Temp:-- {items.current.temp_f} F</p>
                  </div>    
                    <img src={items.current.condition.icon} alt="conditionIcon" />
                    <div>
                        <p>{items.forecast.forecastday.map((i) => i.date)}</p>
                        <p>{items.forecast.forecastday.map((val) => val.day.maxtemp_f)}</p> 
                    </div>
                </div>
            );
        }
}
