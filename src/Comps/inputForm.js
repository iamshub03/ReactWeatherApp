import React from 'react';

const inputForm = (props) => {
    return(
        <div className="inputFormStyle">
            <input type="text" name="city" placeholder="Enter the city name..." id="inputField" onKeyPress={props.enter}/>
      <button id="search" onClick={props.search}>Search</button>
      <button id="reset" onClick={props.reset}>Reset</button>
        </div>
    )
}

export default inputForm;