import React, { Component } from 'react';
import Dzielo from './Dzielo'
import Result from './Result'
import './App.css';

class App extends Component {        // komponent

    state = {
      value: ""
    }

  handleInputChange =(e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
      return ( 
        <div className="App">
          <Dzielo VALUE ={this.state.value }/>

          <Result />
        </div>
      );
    }
}
      

      <header className="App-header">
        <img src={''} className="App-logo" alt="logo" />
        <p> Edit <code></code>e </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )}
}

export default App;
