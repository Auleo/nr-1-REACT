import React from "react";

class Formul extends React.Component {

  render() {

    return (
      <form> onSubmit={this.props.getWeather} >
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="Country" placeholder="Country" />
        <input type="text" name="geolo" placeholder="geolo" />
        <input type="text" name="wet" placeholder="wet" />
        <input type="text" name="temp" placeholder="temp" />
        <input type="text" name="press" placeholder="press" />
        <input type="text" name="rain" placeholder="rain" />
        <input type="text" name="wind" placeholder="wind" />
        <input type="text" name="sunrise" placeholder="sunrise" />

        <button>Jaka jest pogoda ?</button>

      </form>
    );
  }
};

export default Formul;