import React from 'react';

const Wynik = (props) => {
  return (
    <div className="weather">
      {props.country && props.city && <p> Lokalizacja:
      {props.city}, {props.country}</p> }
      {props.temperature && <p>Temperatura:
      {props.temperature} </p>}
      {props.humidity && <p>Zachmurzenie: {props.humidity } 
      </p>}
{props.pressure &&<p> Ciśnienie: {props.pressure} </p> }
      {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="Ikona pogody" />}
      {props.description && <p> Wilgoć: {props.description} </p>}
      {props.err && <p> {props.error } </p> }
  </div>
  )
}

export default Wynik;
