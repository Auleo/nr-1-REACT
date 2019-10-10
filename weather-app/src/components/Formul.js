import React from 'react';

class Formul extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.getWeather} >
        <input type="city" placeholder="Miasto"/>
        <input type="text" name="city" placeholder="City.."/>
        <button>Wyszukaj miasta </button>

      </form>  
    );
  }
};

export default Formul;