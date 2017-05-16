import React, {Component} from 'react';
import Header from './Components/Header';
import Workflow from './Components/Workflow';
import Experience from './Components/Experience';
import Roadmap from './Components/Roadmap';

export default class Home extends Component {
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
