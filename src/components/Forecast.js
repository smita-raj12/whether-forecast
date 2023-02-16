import { useState, useEffect } from 'react';

export default function Forecast({city}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    
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
        }, [])
    //    console.log(items.forecast.forecastday.map((val) => val.day.maxtemp_f))
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="Forecast" name="Forecast">
                    <p>{items.location.name} </p><br />
                    <p>Max Temp:-- {items.current.temp_f} F</p>
                    <img src={items.current.condition.icon} alt="conditionIcon" />

                    {/* <p>{items.forecast.forecastday.map((i) => i.date)}</p>
                    <p>{items.forecast.forecastday.map((val) => val.day.maxtemp_f)}</p> */}
                    
                </div>
            );
        }
}
