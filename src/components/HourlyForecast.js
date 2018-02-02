import React from 'react';
import CurrentForecast from './CurrentForecast'

const HourlyForecast = ({ forecastData }) => {
    const renderForecasts = forecastData.map((forecast, index) => <CurrentForecast key={index} forecast={forecast} />)
    
    return (
    <div>
        <h2>Hourly Forecast</h2>
        {renderForecasts}            
    </div>
)}
export default HourlyForecast