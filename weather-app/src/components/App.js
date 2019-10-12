import React, { Component }  from 'react';
//import logo from '../logo.svg'; //   // eslint-disable-next-line no-undef  /value jest moją dowolną nazwą
import Form from './Form';
import Wynik from './Wynik';
import './App.css';

class App extends Component {
  state = {
    value: "Piewrsze połączenie"

  }
  render() {
    return (
      <div className="App">
        <h1>Aplikacja Pogodowa </h1>
        <Form value={this.state.value} /> 
        <Wynik />
    </div>
    );
  }
}

export default App;
