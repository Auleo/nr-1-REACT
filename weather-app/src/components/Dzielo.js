import React from 'react';

const Dzielo = props =>   {                    //twoże komponent funkcyjny
  return (                           
  <form onSubmit={props.submit} >
      <input type="text" value={ props.value } 
      onChange={props.value} 
      placeholder = "Wpisz miasto" 
    />
    
      <button> Szukaj miasta :</button>
  </form>
  )
}

const button =({onClick, text}) =>{
  return (
    <div className="form-group">
      <button onClick={onClick} className="btn btn-primary btn-sm from-content"> 
      </button>

    </div>
  )
}
export {button}
export default Dzielo              