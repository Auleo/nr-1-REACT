import React from 'react';
import './App.css';
import SearchCity from './SearchCity';
import Head from './Head';
import Wynik from './Wynik';


const api_key = "05508bb378ad891b493b0c886cca7a57";
class App extends React.Component {
  state = {
    value: "",
    data: "",
    city:"",
    temp:"",
    pressure:"",
    wind:"",
    humidity:"",
    geolo:"",
    latitude:"",
    sunrise:"",
    wet:"",
    sunset:"",
    press:"",
    rain:"",
    error:"err",   
    
  }
  getWeather = async (e) => {
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}$units=imperial$appid=${api_key}`);
  /*
    iniMaop =() => {
    const map =new google.maps.MAp(document.getElementById('map'), {
        center: {lat: -34.397, lang: 150.644},
        zoom: 8
      });
    }    
*/

    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({        
        temperature: response.main.temperature,
        city:response.name,
        humidity:response.main.humidity,
        pressure:response.main.pressure,
        wind:response.main.wind,
        geolo:response.main.geolo,

        description: response.weather[0].description,
        wet:response.main.wet,
        sunrise:response.main.sunrise,
        sunset:response.main.sunset,
        rain:response.main.rain,
        icon: response.weather[0].icon,
        error:""
        })
  } else {
  this.setState({
    error:"Pole do wypełnienia"
  })
}
}

render() {
  return (
    <div className="container">
      <div id="map"></div>
      <div className="header">
        <Head/>
        </div>
        <div className="form">
          <SearchCity loadWeather = {this.getWeather}  />
          </div>
            <div className="weather">
              <Wynik
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              wind={this.state.wind}
              geolo={this.state.geolo}
              wet={this.state.wet}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}

              rain={this.state.rain}
              icon={this.state.icon}
              description={this.state.description}
              error={this.state.error} />

          </div>
      </div>    
  ) 
}
}

export default App ;
