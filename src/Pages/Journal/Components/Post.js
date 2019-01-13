import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

export default class Post extends Component {
  constructor (props) {
    super(props)
    this.state = { post: '' }
  }

  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lightest text-grey-darkest') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/Journal-list'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              {this.props.match.params.slug.split('~')[0]}
            </div>
          </div>

          <div className='pb-4 text-xl font-semibold'>
            {this.props.match.params.slug.split('~')[1]}
          </div>
          {/* Post content loaded from github */}
          {parse(this.state.post)}
        </div>
      </div>
    )
  }

  componentWillMount () {
    axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/journal/' + this.props.match.params.slug)
      .then((response) => {
        this.setState({ post: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
