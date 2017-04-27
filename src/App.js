import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Workflow from './Components/Workflow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Workflow />
      </div>
    );
  }
}

export default App;
