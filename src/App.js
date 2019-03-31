import React, { Component } from 'react';

import Connect4 from './Components/Connect4/Connect4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Connect4 />
      </div>
    );
  }
}

export default App;
