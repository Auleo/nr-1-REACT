import React from 'react';

//twór komp funkcyjny zastąpię   input type=              <input type="text" value={ props.value }  
     // onChange={props.value} 
     // placeholder = ""  />     8 line
const Dzielo = props =>   {     
  
  //const { data, city, sunrise,sunset,temp, press, temp,wind,error } = props.weather;
  return (    
    
  <form onSubmit={props.submit} >

    <div>
      <h3>Wyszukiwarka Pogody</h3> 
      <p>Dowiedz się jaka jest temperatura i wiele więcej</p>
    </div>

  </form>
  )
}
const button =({onClick, tekst}) => {
  return (
    <div className="form-group">
    <button onClick={onClick} className="btn btn-primary btn-sm from-content"> 
    </button>

    </div>
  )
}
export {button}
export default Dzielo              