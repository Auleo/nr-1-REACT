import React from 'react';


//komponent funkcyjny = bo bez deklaracji class/ value musi sie połączyć i przekazać wartość
const Form = props => {
  return (
    <form onSubmit = {props.submit} >
    <input type="text"
    value={props.value}  
    onChange={props.change}
    placeholder="Miasto"
    
    />

    <button>Szukaj</button>
  </form>
  )
}
// musze kontrolować co value bedzie miało dzieki handleInput{doobsługi zmiany inputa}

export default Form
