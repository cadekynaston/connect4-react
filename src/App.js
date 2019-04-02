import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Connect4 from './Components/Connect4/Connect4';
import './App.css';

class App extends Component {
  render() {

    ReactGA.initialize('UA-137604730-1');
    ReactGA.pageview('/connect4-react');

    return (
      <div className="app">
        <Connect4 />

        <p className="git-links">Made by&nbsp;
          <a href="https://www.linkedin.com/in/cadekynaston/">Cade Kynaston</a>
        </p>
        <a href="https://github.com/cadekynaston/connect4-react">View the code</a>
      </div>
    );
  }
}

export default App;
