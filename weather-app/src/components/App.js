import React, { Component } from 'react';
import Dzielo from './Dzielo';
import Formul from './Formul';
import Result from './Result';
import Weather from './Weather';

import Tytu from './Tytu';
// import 'axios' from axios;
import './App.css';
//import PropTypes from 'prop-types'

const APIKey ='05508bb378ad891b493b0c886cca7a57';

class App extends Component {     
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
    
    
  handleInputChange =(e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    console.log('Potwiedzono');
    const API = 'http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=&{APIKey}$units=metric';

    fetch (API)  // obietnica ,która bedzie czekać na roztrzygnicie 
      .then( response => { 
        if (response.ok) { 
          return response
        }
        else {
          throw Error('No Error no')
        }
    })
      .then(response => response.json() )

      .then (data => {
        console.log(data);
      } )
    /*  .then( () =>this.setState({ error: false}) )
      .catch(error => { console.log(error); this.setState({ error:false })  
      .then(data =>{
        const date = new Date().toLocaleString()
        this.setState({
          
          city: '',
          geolo:'',
          data:'',
          wet:'',
          temp:'',
          rain:'',
          press:'',
          wind:'',
          error:'',
        
      })  */
  }  


render() {
  return ( 
  <div className ="App"> 
        <Dzielo 
          value = {this.state.value }
          change={this.handleInputChange} 
          submit={this.handleCitySubmit} 
        />
        <Result error={this.state.error} />
          
  </div>
        );
      }
    }

      export default App;
