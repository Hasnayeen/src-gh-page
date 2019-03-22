import React, { Component } from 'react'
import axios from 'axios'

export default class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      images: [],
      photographer: '',
      imageUrl: ''
    }
    this.shortcutKey = this.shortcutKey.bind(this)
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className=" text-white text-center text-sm p-2 bg-black opacity-75 rounded inline">
          Photo by 
        <a id="photographer" className="text-white no-underline font-semibold" href={this.state.imageUrl}> {this.state.photographer} </a> on 
        <a className="text-white no-underline font-semibold" href="https://unsplash.com?utm_source=nehal_personal_website&utm_medium=referral">Unsplash</a>
        </div>        
      </div>
    )
  }

  componentDidMount() {
    document.body.addEventListener('keyup', this.shortcutKey)
  }

  shortcutKey(e) {
    switch (e.keyCode) {
      case 39:
        this.setState({ current: this.state.current + 1 })
        this.setImage()
        break

      case 37:
        this.setState({ current: this.state.current - 1 })
        this.setImage()
        break

      default:
        break
    }
  }

  componentWillMount = () => {
    axios({
      url: 'https://9x9ol3owx7.execute-api.us-east-1.amazonaws.com/prod/images',
    })
      .then((response) => {
        this.setState({ images: response.data })
        this.setState({ current: this.randomIntFromInterval(this.state.images.length) })
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

  randomIntFromInterval = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1) + 0)
  }

  setImage = () => {
    if (this.state.current >= this.state.images.length) {
      this.setState({ current: 0 })
    } else if (this.state.current < 0) {
      this.setState({ current: this.state.images.length })
    }
    let w = window.innerWidth
    let h = window.innerHeight
    document.body.style.backgroundImage = "url('" + this.state.images[this.state.current].urls.raw + "&w=" + w + "&h=" + h + "&fit=crop')"
    this.setState({ imageUrl: this.state.images[this.state.current].user.links.html + "?utm_source=nehal_personal_website&utm_medium=referral" })
    this.setState({ photographer: this.state.images[this.state.current].user.name })
  }
}
