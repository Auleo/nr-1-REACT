import React from 'react';

class Weather extends React.Component {

  render() {
    return ( 
      <form onSubmit={this.props.getWeather} >
        <input type="city" placeholder="Miasto"/>
        <input type="geolo" name="geolo" placeholder=".."/>
        <button>Wyszukaj miasta </button>

      </form>  
    );
  }
};

/*
class Weather extends Components{
  constructor(props){
    super(props)

    this.state ={
      'temperature':'',
      'City':'',
      'humidity':'',
      'geolo':'',
      'error': '',
      'temp':'',
      'description':'',
      'wet':'',
      'temp':'',
      'press':'',
      'rain':'',
      'sunrise':'',
      'error':'err',
      
    }
  }

} */
export default Weather; 