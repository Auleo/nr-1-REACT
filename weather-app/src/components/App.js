import React, { Components } from 'react';
import Dzielo from './Dzielo';
import Formul from './Formul';
import Weather from './Weather';
import Appcs  from './Appcs.css';

class App extends React.Component {  
  //getWeather =this.getWeather.bind(this)
  // musze to zainicjalizować w tym mscu 

  getWeather = async ( e ) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${temperature}&appid=&{api_call}$units=metric');
    const data = await api_call.json();  //JSON.stringify (value: any, space: any);
    console.log(data);
    
  this.setState({
    tremperature:data.main.temp,
    city: data.name,
    humidity:data.main.humidity,
    geolo:data.main.geolo,
    description:data.main.description,
    wet:data.main.wet,
    temp:data.main.temp,
    press:data.name.press,
    rain:data.name.rain,
    sunrise:data.name.sunrise,
  

  });
  }

    render () {
      return (
        <div>
          <Dzielo /> 
          <Formul  getWeather={this.getWeather} />
          <Weather tremperature={this.state.temperature} 
            city={this.state.city}
            humidity={this.state.humidity}
            wet={this.state.wet}
            temp={this.state.temp}
            wet/>
      
        </div>
      )
    }
  };

export default App;

