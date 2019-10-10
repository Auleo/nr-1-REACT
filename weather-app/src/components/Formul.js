import React from "react";

class Formul extends React.Component {

  render() {

    return (
      <form onSubmit={this.props.getWeather} >
        <input type="city" placeholder="Miasto"/>
     
        <button> Szukaj miasta :</button>

      

      </form>  
    );
  }
};

export default Formul;