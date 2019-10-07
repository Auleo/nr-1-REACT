import React from 'react';

const Dzielo = props =>   {                    //twoże komponent funkcyjny
  return (                           
  <Dzielo onSubmit={props.submit} >
      <input type="text" 
      value={ props.value } 
      onChange={props.value} 
      placeholder = "Wpisz miasto" 
    />
    
      <button> Szukaj miasta :</button>
  </Dzielo>
  )
}

export default Dzielo              