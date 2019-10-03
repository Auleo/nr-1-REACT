import React, { Component } from 'react';
import Dzielo from './Dzielo'
import Result from './Result'
import './App.css';

class App extends Component {        // komponent
     
    state = {
      value: ""
    }

  handleInputChange =(e) => {
    this.setState({
      value: e.target.value
    })
  }
  render () {
      return ( 
          <div className="App">
              <Dzielo VALUE ={this.state .VALUE/>


      <Result />

      <header className="App-header">
        <img src={''} className="App-logo" alt="logo" />
         <img src="/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png" alt="openweather" class="img-responsive" width="128" height="54"></img>
        <p> Edit <code></code>e
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )}
}

export default App;
