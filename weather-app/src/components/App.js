import React, { Component } from 'react';
import Dzielo from './Dzielo'
import Result from './Result'
import './App.css';

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
    const API = 'http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=05508bb378ad891b493b0c886cca7a5 '

    fetch (API)  
      .then(response => console.log(response.ok) ) {

      }
// catch asekuracyjnie pokaże, gdy coś pójdzie nie tak
        .catch(err => console.log(err))

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
}
      

export default App;
