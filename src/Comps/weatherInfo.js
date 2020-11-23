import React from 'react';

const weatherInfo = (props) => {
    return(
        <div className="weatherInfoStyle">
            <h3>Enter a City name to get it's weather details here.</h3>
                    <hr />
            <div>Location : {props.location} </div>
            <div>State : {props.state}</div>
            <div>Country : {props.country} </div>
            <div>Temperature : {props.temperature}°C and {props.temp}°F</div>
            <div>Humidity : {props.humidity}</div>
            <div>Feels Like : {props.feelslike}°C</div>
            <div>Condition : {props.condition}</div>

        </div>
    )
}

export default weatherInfo;