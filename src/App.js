import React, { Component } from 'react';

import Connect4 from './Components/Connect4/Connect4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Connect4 />

        <p className="git-links">Made by&nbsp;
          <a href="https://github.com/cadekynaston">Cade Kynaston</a>
        </p>
        <a href="https://github.com/cadekynaston/connect4-react">View the code</a>
      </div>
    );
  }
}

export default App;
