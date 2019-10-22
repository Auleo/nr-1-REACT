import React from 'react';

const Wynik = (props) => {
  return (
    <div className ="weather">
      {props.country&& props.city && <p> Lokalizacja:
      {props.city}, {props.country}</p> }
      {props.temperature && <p>Temperatura:
      {props.temperature} </p>}
      {props.humidity && <p>Zachmurzenie: {props.humidity } 
      </p>}

      {props.icon && 
      <img src={`http://www.indeeo.com/idraw/tutorials/content/26-create-a-set-of-weather-icons/Header.jpg}.jpg`}
      alt="Ikona pogody" 
      />}
      {props.description && <p> Jakość:
      {props.description} </p> }
      {props.err && <p> {props.error } </p> }
  </div>
  )
}

export default Wynik;
