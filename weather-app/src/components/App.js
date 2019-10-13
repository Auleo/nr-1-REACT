import React, { Component }  from 'react';
//import logo from '../logo.svg'; //   // eslint-disable-next-line no-undef  /value jest moją dowolną nazwą
//value:e.target.value do mego value przypisuje sobie event { skrut e ;)  i jak mi ta metoda ustawia to mi poniżej zrenderuje }
import Form from './Form';
import Wynik from './Wynik';
import './App.css';
import {} from './section' ;
import { timeout } from 'q';

//appid='05508bb378ad891b493b0c886cca7a57'
     //  = &appid=05508bb378ad891b493b0c886cca7a57


const APIkey ='05508bb378ad891b493b0c886cca7a57'

class App extends Component {

  state = {
    value: '',
    data: '',
    city:'',
    temp:'',
    pressure:'',
    wind:'',
    humidity:'',
    geolo:'',
    description:'',
    wet:'',
    sunrise:'',
    sunset:'',
    press:'',
    rain:'',
    error:'err',   
    
  }

  handleInputChange = e => {
    this.setState({
      value:e.target.value
    })
  }


  handleCitySubmit = e => {
    e.preventDefault()
    const API =
    'http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}$units=matric';
    //api.openweathermap.org/data/2.5/weather?q={this.state.value}

    fetch(API)
      .then(response => {    
      if (response.ok) {
        return response
        }
        throw Error("U uu nie udało sie")
      })

      .then (response => response.json())
      .then (data => {
        const time = new data().toLocalString()
          this.seState ({
            error:false,
            data: time,
            temp:'',
            pressure:'',
            wind:'',
            humidity:'',
            geolo:'',
            description:'',
            wet:'',
            sunrise:data.sys.sunrise,
            sunset:'',
            press:'',
            rain:'',
            city:'',
          })
        })
      .catch(err => { 
        console.log(err);
        this.setState({
          error:true
        })   
      })
        .then(response=> console.log(response.ok) )
      .catch(err => console.log(err))
        

  }
  render() {
    return (
      <div className="App">
        <h1>Aplikacja Pogodowa </h1>
        <Form value={this.state.value} 
        change = {this.handleInputChange } 
        submit={this.handleCitySubmit } /> 
        <Wynik err={this.state.err}/>
    </div>
    );
  }
}

export default App;
