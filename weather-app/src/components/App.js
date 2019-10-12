import React, { Component } from 'react';
import Dzielo from './Dzielo';
import Formul from './Formul';
import Weather from './Weather';
import Appcs  from './Appcs.css';

class App extends React.Component {  
  //getWeather =this.getWeather.bind(this)
  // musze to zainicjalizować w tym mscu 
  
  getWeather = async ( e ) => {
    e.preventDefault();

    const API_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${temperature}&appid=&{APIKey}$units=metric');
    const data = await API_call.json();  //JSON.stringify (value: any, space: any);
    console.log(data);
    
  }

    render () {
      return (
        <div>
          <Dzielo /> 
          <Formul  getWeather={this.getWeather} />
          <Weather getWeather={this.getWeather}/>
      
        </div>
      )
    }
  };

export default App;

