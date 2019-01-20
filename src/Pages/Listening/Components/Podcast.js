import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Episode from './Episode'

let title = ''

export default class Podcast extends Component {
  constructor (props) {
    super(props)
    this.state = {episodes: []}
  }

  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lightest text-grey-darkest') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/Listening'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              {title}
            </div>
          </div>

          <div className='flex flex-col items-center'>
            {this.state.episodes.map((episode) => {
              return <Episode darkThemeActive={this.props.darkThemeActive} key={episode.episode} episode={episode} />
            })}
          </div>
        </div>
      </div>
    )
  }

  async componentWillMount () {
    if (Object.keys(window.data.listening).length < 1) {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/listening.json')
        window.data.listening = response.data
        title = window.data.listening[(parseInt(this.props.match.params.podcast, 10) - 1)].title
        this.getEpisodeList()
      } catch (error) {
        console.log(error)
      }
    } else {
      title = window.data.listening[(parseInt(this.props.match.params.podcast, 10) - 1)].title
      this.getEpisodeList()
    }
  }

  async getEpisodeList () {
    try {
      const url = window.data.listening[parseInt(this.props.match.params.podcast, 10) - 1].rss
      const response = await axios.get('https://r5225i0zwj.execute-api.us-east-1.amazonaws.com/prod/rss?url=' + url)
      this.setState({episodes: response.data.channel.items})
    } catch (error) {
      console.log(error)
    }
  }
}
