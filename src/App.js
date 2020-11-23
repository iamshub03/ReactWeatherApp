import React, { Component } from 'react';

import Navbar from './Comps/navbar';
import Inputform from './Comps/inputForm';
import Weatherinfo from './Comps/weatherInfo'

class App extends Component {

  state = {
    events : [],
    active : false
  };
  async componentDidMount(){
    
    let key= document.getElementById("inputField").value;
    console.log(key);
    try{
      if(key !== ''){
        const result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=beeb9c590533491dbe2140355201710&q=${key}&days=1`);
        const value = await result.json();
        console.log(value);
        this.setState({events : [
          value.location.name,
          value.location.region,
          value.location.country,
          value.current.temp_c,
          value.current.humidity,
          value.current.feelslike_c,
          value.current.temp_f,
          value.current.condition.text
        ],
      active : true})
      }
    }
    catch(err){
      alert("Invalid input or the city is not present in our database, sorry for the inconvenience.");
    }
      
  }
  searchClickHandler = () => {
    let inputFieldValue = document.getElementById("inputField").value;
    if(inputFieldValue === ""){
      alert("City input field is empty. Please enter a city name.");
    }
    else{
      this.componentDidMount();
    }
  }
  enterClickHandler = (event) => {
    if(event.charCode === 13){
      this.searchClickHandler();
    }
  }
  
  resetClickHandler = () => {
    document.getElementById('inputField').value = "";
    this.setState({events : [], active : false})
  }
  render() {
    return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="leftContainer">
        <Inputform search={this.searchClickHandler} enter={this.enterClickHandler} reset={this.resetClickHandler}/>
        </div>
        <div className="rightContainer">
          {this.state.active === false?
          <div className="template">
          <h3>Enter a City name to get it's weather details here.</h3>
          </div>:<span></span>}
        {this.state.active?<Weatherinfo 
        location={this.state.events[0]}
        state = {this.state.events[1]}
        country = {this.state.events[2]}
        temperature = {this.state.events[3]}
        humidity = {this.state.events[4]}
        feelslike = {this.state.events[5]}
        temp = {this.state.events[6]}
        condition = {this.state.events[7]}
        />: <div></div>}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
