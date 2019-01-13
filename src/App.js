import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './Pages/Home/Home'
import Posts from './Pages/Posts/Posts'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Now from './Pages/Now/Now'
import Reading from './Pages/Reading/Reading'
import ThemeSwitcher from './Components/ThemeSwitcher'
import Journal from './Pages/Journal/Journal'
import Post from './Pages/Journal/Components/Post'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { images: [], current: 0, darkThemeActive: false }
    this.randomIntFromInterval = this.randomIntFromInterval.bind(this)
    this.shortcutKey = this.shortcutKey.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  render() {
    return (
      <Router>
        <main>
          <ThemeSwitcher darkThemeActive={this.state.darkThemeActive} toggleTheme={this.toggleTheme}></ThemeSwitcher>
          <Route exact path='/' render={(props) => <Home darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/About' render={(props) => <About darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Now' render={(props) => <Now darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Posts' render={(props) => <Posts darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Projects' render={(props) => <Projects darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Reading' render={(props) => <Reading darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Journal/:slug' render={(props) => <Post darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Journal-list' render={(props) => <Journal darkThemeActive={this.state.darkThemeActive} {...props} />} />
        </main>
      </Router>
    )
  }

  componentDidMount() {
    document.body.addEventListener('keyup', this.shortcutKey)
  }

  componentWillMount = () => {
    axios({
      url: 'https://9x9ol3owx7.execute-api.us-east-1.amazonaws.com/prod/images',
    })
      .then((response) => {
        this.setState({images: response.data})
        this.setState({ current: this.randomIntFromInterval(this.state.images.length)})
        this.setImage()
        this.rotateImage()
      })
      .catch((error) => {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-0.3.5&s=e47c3e84d7dea5c93d2a5dfc35e45189&auto=format&fit=crop&w=1951&q=80')"
        document.getElementById('photographer').setAttribute('href', 'https://unsplash.com/@samscrim')
        document.getElementById('photographer').textContent = "Samuel Scrimshaw"
      })
  }

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.shortcutKey)
    clearInterval(this.timerID)
  }

  rotateImage() {
    this.timerID = setInterval(
      () => {
        this.setState({ current: this.state.current + 1 })
        this.setImage()
      },
      120000
    )
  }

  shortcutKey(e) {
    switch (e.keyCode) {
      case 39:
        this.setState({ current: this.state.current + 1})
        this.setImage()
        break
        
      case 37:
        this.setState({ current: this.state.current - 1})
        this.setImage()
        break

      default:
        break
    }
  }

  randomIntFromInterval = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1) + 0)
  }
  
  setImage = () => {
    if (this.state.current >= this.state.images.length) {
      this.setState({current: 0})
    } else if (this.state.current < 0) {
      this.setState({current: this.state.images.length})
    }
    let w = window.innerWidth
    let h = window.innerHeight
    document.body.style.backgroundImage = "url('" + this.state.images[this.state.current].urls.raw + "&w=" + w + "&h=" + h + "&fit=crop')";
    document.getElementById('photographer').setAttribute('href', this.state.images[this.state.current].user.links.html + "?utm_source=nehal_personal_website&utm_medium=referral");
    document.getElementById('photographer').textContent = this.state.images[this.state.current].user.name;
  }

  toggleTheme () {
    this.setState({darkThemeActive: !this.state.darkThemeActive})
  }
}

export default App
