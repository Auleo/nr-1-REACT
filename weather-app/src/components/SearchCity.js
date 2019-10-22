import React from 'react';

const SearchCity = (props) => {
  return ( 
    <form onSubmit = {props.loadWeather} >
    <input type="text" name="city" placeholder="Wybór miasta"/> 
    
    <button>Szukaj</button>
  </form>
  )
}

export default SearchCity;
