import React, { Component } from 'react';
import logo from '../logo.svg';
import MainApp from './MainApp/MainApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainApp />
      </div>
    );
  }
}

export default App;
