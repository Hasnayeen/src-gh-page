import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
