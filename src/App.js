import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Posts from './Pages/Posts/Posts'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Now from './Pages/Now/Now'
import Images from './Pages/Images/Images'
import Reading from './Pages/Reading/Reading'
import Listening from './Pages/Listening/Listening'
import Podcast from './Pages/Listening/Components/Podcast'
import ThemeSwitcher from './Components/ThemeSwitcher'
import Journal from './Pages/Journal/Journal'
import Post from './Pages/Journal/Components/Post'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { darkThemeActive: false }
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
          <Route path='/Images' render={(props) => <Images darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Posts' render={(props) => <Posts darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Projects' render={(props) => <Projects darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Reading' render={(props) => <Reading darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Listening' render={(props) => <Listening darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Podcasts/:podcast' render={(props) => <Podcast darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Journal/:slug' render={(props) => <Post darkThemeActive={this.state.darkThemeActive} {...props} />} />
          <Route path='/Journal-list' render={(props) => <Journal darkThemeActive={this.state.darkThemeActive} {...props} />} />
        </main>
      </Router>
    )
  }

  toggleTheme () {
    this.setState({darkThemeActive: !this.state.darkThemeActive})
  }
}

export default App
