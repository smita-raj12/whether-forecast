/* eslint-disable jsx-a11y/alt-text */

import { useState, useEffect } from 'react';

export default function TexasForecast({city}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
            useEffect(() => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`)
            .then(res => res.json())
            .then(
              (jsonifiedResponse) => {
                console.log(jsonifiedResponse)
                setIsLoaded(true);
                setItems(jsonifiedResponse);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
          }, [])
       
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <ul>
                {items.location.name} <br />
                Max Temp{items.current.temp_f}
                <img src={items.current.condition.icon} />
              </ul>
            );
          }
}
