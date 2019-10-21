import React from 'react';
import Form from './Form';
import Wynik from './Wynik';
import Head form './Head.';
import './App.css';

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
    description:"",
    wet:"",
    sunrise:"",
    sunset:"",
    press:"",
    rain:"",
    error:"err",   
    
  }
  getWeather = async (e) => {
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch (`http://
    api.openweathermap.org/data/2.5/weather?q=${city},
    ${country}$units=imperial$appid=${api_key}`);

    const response =await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temperature,
        city:response.name,
        humidity:response.main.humidity,
        pressure:response.main.pressure,
        temperature:respone.main.temperature,
        wind:response.main.wind,
        geolo:response.main.geolo,
        description: response.weather[0].description,
        wet:response.main.wet,
        sunrise:response.main.sunrise,
        sunset:response.main.sunset,
        pressure:response.main.pressure,
        rain:response.main.rain,
        icon: response.weather[0].icon,
        description:response.weather[0].description,
        error:""
        })
  }
  else
  this.setState({
    error:"Pole do wypełnienia"
  })
}


render() {
  return(
    <div className="container">
      <div className="header">
        <Head/>
        </div>
        <div className="form">
          <Form loadWeather = {this.getWeather}  />
          </div>
            <div className="weather">
              <Wynik
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              temperature={this.state.temperature}
              wind={this.state.wind}
              geolo={this.state.geolo}
              wet={this.state.wet}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              pressure={this.state.pressure}
              rain={this.state.rain}
              icon={this.state.icon}
              description={this.state.description}
              error={this.state.error} />

          </div>
      </div>
    
  ) 
}

export default App 