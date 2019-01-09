import React, {Component} from 'react'

export default class Post extends Component {
  render () {
    return (
      <div className='py-4 border-t' key={this.props.post.id}>
        <a className='no-underline text-xl font-semibold text-grey-darker' href={'https://medium.com/@searching.nehal/' + this.props.post.slug} target='_blank'>
          {this.props.post.title}
        </a>
        <div className='text-xs'>Published on <span className='text-sm text-grey-darkest pl-1'>{this.props.post.date}</span></div>
      </div>
    )
  }
}
