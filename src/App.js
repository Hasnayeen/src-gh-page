import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], current: 0 };
    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.shortcutKey = this.shortcutKey.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    document.body.addEventListener('keyup', this.shortcutKey);
  }

  componentWillMount = () => {
    axios({
      url: 'https://9x9ol3owx7.execute-api.us-east-1.amazonaws.com/prod/images',
    })
      .then((response) => {
        this.setState({images: response.data});
        this.setState({ current: this.randomIntFromInterval(this.state.images.length)});
        this.setImage();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.shortcutKey);
  }

  shortcutKey(e) {
    switch (e.keyCode) {
      case 39:
        this.setState({ current: this.state.current + 1})
        this.setImage()
        break;
        
        case 37:
        this.setState({ current: this.state.current - 1})
        this.setImage()
        break;
    }
  }

  randomIntFromInterval = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1) + 0);
  }
  
  setImage = () => {
    if (this.state.current >= this.state.images.length) {
      this.setState({current: 0});
    } else if (this.state.current < 0) {
      this.setState({current: this.state.images.length});
    }
    document.body.style.backgroundImage = "url('" + this.state.images[this.state.current].urls.raw + "')";
    document.getElementById('photographer').setAttribute('href', this.state.images[this.state.current].user.links.html);
    document.getElementById('photographer').textContent = this.state.images[this.state.current].user.name;
  }
}

export default App;
