import React, { Component } from 'react'

export default class Episode extends Component {
  render () {
    return (
      <figure className={(this.props.darkThemeActive ? 'opacity-75' : '') + ' text-grey-darker w-full bg-grey-lighter my-4 rounded shadow-md flex flex-col'}>
        <div className='flex flex-col p-4 pb-0'>
          <figcaption className='text-xl font-semibold'>{this.props.episode.title._text}</figcaption>
          <div className='text-grey-darkest'>
            Episode {this.props.episode['itunes:episode'] ? this.props.episode['itunes:episode']._text : ''}
            <span className='pl-4' role='img' aria-label='clock'> 🕓</span>
            {this.props.episode['itunes:duration'] ? this.props.episode['itunes:duration']._text : ''}
          </div>
          <div className='text-sm'>{this.props.episode.pubDate._text.substr(0, 16)}</div>
        </div>
        <audio controls preload='metadata' src={this.props.episode.enclosure._attributes.url} className='w-full'>
          Your browser does not support the <code>audio</code> element.
        </audio>
      </figure>
    )
  }
}
