import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Workflow from './Components/Workflow';
import Experience from './Components/Experience';
import Roadmap from './Components/Roadmap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Workflow />
        <Experience />
        <Roadmap />
      </div>
    );
  }
}

export default App;
