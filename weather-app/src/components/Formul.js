import React from 'react';

class Formul extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.getWeather} >
        <input type="city" placeholder="Miasto"/>
        <input type="geolo" name="geolo" placeholder=".."/>
        <button>Wyszukaj miasta </button>

      </form>  
    );
  }
};
class RegistrationForm extends Component{
  constructor(props){
    super(props)

    this.state ={
      'temperature':'',
      'City':'',
      'humidity':'',
      'geolo':'',
      'error': '',
      
    }
  }

}
export default Formul; 