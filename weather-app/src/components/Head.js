import React from 'react';


const Heading =(props) =>{
  return(
  <div>
    <h1>
      JAka Pogoda
    </h1>
    <h3>
      pogodda w mieście
    </h3>
  </div>
)
}

const container = ()=> {
  return (<h1>container</h1>)
}

const weather = ()=> {
  return (<h1>weather</h1>)
}

export {
  container, weather
}
