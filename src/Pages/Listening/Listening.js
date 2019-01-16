import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Listening extends Component {
  render () {
    const podcasts = (Object.keys(window.data.listening).length > 0) ? (
      window.data.listening.map((podcast) =>
        <div className='m-6 bg-grey-light rounded cursor-pointer' key={podcast.id}>
          <Link className='no-underline text-xl font-semibold flex flex-col items-center text-grey-darkest' to={'/Podcasts/' + podcast.id}>
            <img src={podcast.image} alt={podcast.title} className='w-32 h-32 rounded m-3 mb-0' />
            <div className='text-sm pt-2 font-semibold'>
              {podcast.title}
            </div>
          </Link>
        </div>
      )
    ) : (
      <div />
    )

    return (
      <div className='w-full lg:w-4/5 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest' : 'bg-grey-lightest') + ' text-grey-darkest w-5/6 xl:w-1/2 flex flex-col justify-center py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              Podcast I Listen
            </div>
          </div>

          <div className='flex flex-row flex-wrap justify-center'>
            {podcasts}
          </div>
        </div>
      </div>
    )
  }

  componentWillMount () {
    if (Object.keys(window.data.listening).length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/listening.json')
        .then((response) => {
          window.data.listening = response.data
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
