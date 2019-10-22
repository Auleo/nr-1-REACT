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
<<<<<<< HEAD
      latitude:"",
    sunrise:"",
      wet:"",
=======
    latitude:"",
    sunrise:"",
    wet:"",
>>>>>>> 3f5a3a38314a45ac0ca72155c926de27ec74637a
    sunset:"",
      press:"",
      rain:"",
    error:"err",   
    
  }
  getWeather = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`); 
    const response = await api_call.json();
  
    if (city && response && response.main) {
      const { humidity, pressure, temp } = response.main

      this.setState({        
        temperature: temp,
        city: response.name,
        humidity,
        pressure,
        wind: response.wind.speed,
        geolo: response.coord,
=======
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

>>>>>>> 3f5a3a38314a45ac0ca72155c926de27ec74637a
        description: response.weather[0].description,
        sunrise: response.sys.sunrise,
        sunset:response.sys.sunset,
        icon: response.weather[0].icon,
        error: ""
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
<<<<<<< HEAD

      <div id="map"></div>

=======
      <div id="map"></div>
>>>>>>> 3f5a3a38314a45ac0ca72155c926de27ec74637a
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
                wind={this.state.wind.speed}
                geolo={this.state.geolo}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                icon={this.state.icon}
                description={this.state.description}
                error={this.state.error} />
         </div>
      </div>    
  ) 
}
}

export default App ;
