import React, { Component } from 'react';
import Tytu from './Tytu';
import Dzielo from './Dzielo';
import Formul from './Formul';
import { Container,Button, Alter} from 'reactstrap';
import './App.css';



const APIKey ='05508bb378ad891b493b0c886cca7a57';

class App extends React.Component {  

  state ={
    temperature:unescape,
    City: undefined,
    humidity: undefined,
    description: undefined,
    error:undefined
    
  }

    getWeather = async ( e ) => { 

      e.preventDefault();
    
      const city = e.target.elements.name.city.value;
      const geolo = e.target.elements.name.geolo.value;
      const wet = e.target.elements.name.wet.value;
      const temp = e.target.elements.name.temp.value;
      const press = e.target.elements.name.press.value;
      const rain = e.target.elements.name.rain.value;
      const sunrise = e.target.elements.name.sunrise.value;
      
      const API_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=&{APIKey}$units=metric');
      const data = await API_call.json();  //JSON.stringify (value: any, space: any);

      console.log(data);
      this.setState({

      temperature:data.main.temp,
      City: data.name,
      humidity: undefined,
      description: undefined,
      error:undefined
    });

  }

    render () {
      return (
        <div>
          <Dzielo getWeather={this.getWeather} /> 
          <Formul />
        </div>
      )
    }

  }

export default App;

