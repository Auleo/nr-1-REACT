import React, { Component } from 'react';
import Dzielo from './Dzielo'
import Result from './Result'
import 'axios' from axios;
import './App.css';
const APIKey = '05508bb378ad891b493b0c886cca7a57'
class App extends Component {        // komponent

    state = {
      value:'',
      city: '',
      data: '',
 //     Położeniu geolokalizacyjnym miasta (latitude, longitude)
      wilgotnosc:'',
      temp:'',
      rain:'',
      press: '',
      wind:'',
      error:'',

    }

  handleInputChange =(e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    console.log("Potwiedzono");
    const API = 'http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=&{APIKey}$units=metric';

    fetch (API)  
      .then(response => { if (response.ok) return response }
      //throw Error('No Error no')
  })
      .then( response => response.json() )
      .then(data => console.log(data))
  //   .catch(error => console.log(error))
// catch asekuracyjnie pokaże, gdy coś pójdzie nie tak
}


  render () {
      return ( 
        <div className="App">
          <Dzielo value ={this.state.value }
            change={this.handleInputChange} 
              submit={this.handleCitySubmit} 
        />

          <Result />
        </div>
      );
    }
  
export default App;
