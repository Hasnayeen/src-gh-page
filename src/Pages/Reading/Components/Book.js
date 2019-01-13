import React, { Component } from 'react'

export default class Book extends Component {
  render () {
    return (
      <div className='py-4 border-t' key={this.props.book.id}>
        <a className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' no-underline text-xl font-semibold'} href={this.props.book.url} target='_blank'>
          {this.props.book.title}
        </a>
        <div className='text-xs'>by <span className={(this.props.darkThemeActive ? 'text-white' : 'text-grey-darkest') + ' text-sm pl-1'}>{this.props.book.author}</span></div>
      </div>
    )
  }
}
