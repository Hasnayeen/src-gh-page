import React, {Component} from 'react'

export default class Post extends Component {
  render () {
    return (
      <div className='py-4 border-t' key={this.props.post.id}>
        <a className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-indigo') + ' no-underline text-xl font-semibold'} href={'https://medium.com/@searching.nehal/' + this.props.post.slug} target='_blank' rel='noreferrer noopener'>
          {this.props.post.title}
        </a>
        <div className={(this.props.darkThemeActive ? 'text-white' : 'text-indigo-dark') + ' text-sm pl-1'}>{this.props.post.date}</div>
      </div>
    )
  }
}
