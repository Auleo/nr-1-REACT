import React from 'react';


//komponent funkcyjny = bo bez deklaracji class/ value musi sie połączyć i przekazać wartość
const Form = props => {
  return (
    <form>
    <input type="text" value={props.value}  />
    <button>Wyszukiwanie miasta</button>
   </form>
  )
}

export default Form
