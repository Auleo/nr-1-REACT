import React, { Component } from 'react';
import Dzielo from './Dzielo';
import Formul from './Formul';
import Result from './Result';
import Weather from './Weather';
import './App.css';
import Tytu from './Tytu';
// import 'axios' from axios;
//import PropTypes from 'prop-types'

const APIKey ='05508bb378ad891b493b0c886cca7a57';

class App extends React.Component {  

  state = {
      value:'',
      city: '',
      geolo:'',
      data:'',
      wet:'',
      temp:'',
      rain:'',
      press:'',
      wind:'',
      sunrise:'',
      sunset:'',
      error:''
    }



    getWeather = async () => {
    const API_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=&{APIKey}$units=metric');
    
    const data = await API_call.json();  //JSON.stringify (value: any, space: any);

    console.log(data);

  }



    render () {
      return (
        <div>
          <Formul />
          <Weather />
          <Dzielo />
          <Formul getWeather={this.getWeather} />
        </div>
      )
    }
      

  
  }

export default App;

