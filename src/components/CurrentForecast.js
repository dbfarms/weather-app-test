import React from 'react';
import moment from 'moment';

const CurrentForecast = ( {forecast: { apparentTemperature, precipProbability, humidity, summary, temperature, time}}) => 
    <div>
        <h2>Forecast</h2>
        <div style={{ border: 'solid 1px black', padding: '16px', margin: '16px'}}>
            <h3>{summary}</h3>
            <p>Current Time: {moment.unix(time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</p>
            <p>Temperature: {Math.round(temperature)}</p>
            <p>Feels like: {Math.round(apparentTemperature)}</p>
            <p>Chance of Percipitation: {precipProbability}%</p>
            <p>Humidity: {humidity}%</p>
        </div>
    </div>

export default CurrentForecast