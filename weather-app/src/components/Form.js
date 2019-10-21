import React from 'react';

const Form = (props) => {
  return ( 
    <form onSubmit = {props.loadWeather} >
    <input type="text" name="city" placeholder="Wybór miasta"/> 
    <input type="text" name="country" placeholder="Wybór dzielnicy" />
    
    <button>Szukaj</button>
  </form>
  )
}

export default Form
