import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = { now: '' }
  }

  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lightest text-grey-darkest') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              What I'm doing now
            </div>
          </div>

          {/* Now page content loaded from giub */}
          {parse(this.state.now)}

          {(Object.keys(window.data.reading).length > 0) ? (
            <div className='py-6'>
              I'm currently reading <a href={window.data.reading.current.url} target='new' className='no-underline text-blue-light'>"{window.data.reading.current.title}"</a> by {window.data.reading.current.author}.
            </div>
          ) : (
            <div />
          )
          }
          <div className='pt-4 text-center leading-loose'>
            Inspired by <a href='https://sivers.org/nowff' target='new' className='no-underline text-blue-light'>Derek Sivers</a>
          </div>
        </div>
      </div>
    )
  }

  componentWillMount () {
    axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/now.html')
      .then((response) => {
        this.setState({now: response.data})
        this.forceUpdate()
      })
      .catch((error) => {
        console.log(error)
      })
    if (Object.keys(window.data.reading).length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/reading.json')
        .then((response) => {
          window.data.reading = response.data
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
