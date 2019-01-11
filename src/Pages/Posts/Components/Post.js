import React, {Component} from 'react'

export default class Post extends Component {
  render () {
    return (
      <div className='py-4 border-t' key={this.props.post.id}>
        <a className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-indigo') + ' no-underline text-xl font-semibold'} href={'https://medium.com/@searching.nehal/' + this.props.post.slug} target='_blank'>
          {this.props.post.title}
        </a>
        <div className='text-xs'>Published on <span className={(this.props.darkThemeActive ? 'text-white' : 'text-indigo-dark') + ' text-sm pl-1'}>{this.props.post.date}</span></div>
      </div>
    )
  }
}
