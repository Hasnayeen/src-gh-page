import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Journal extends Component {
  render () {
    const posts = (Object.keys(window.data.journal).length > 0) ? (
      window.data.journal.map((post) =>
        <div className='py-4 border-t' key={post.sha}>
          <Link className={(this.props.darkThemeActive ? 'text-blue' : 'text-indigo') + ' no-underline text-xl font-semibold'} to={'/Journal/' + post.path}>
            {post.path.split('~')[1]}
          </Link>
          <div className={(this.props.darkThemeActive ? 'text-white' : 'text-indigo-darker') + ' text-sm pl-1'}>{post.path.split('~')[0]}</div>
        </div>
      )
    ) : (
      <div />
    )

    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lightest text-grey-darkest') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              Work Journal
            </div>
          </div>
          <div className='py-3'>
            I'll try to write everyday about what I'm working on, problems I'm solving, and things I'm trying to learn.
          </div>

          {posts}
        </div>
      </div>
    )
  }

  componentDidMount () {
    if (window.data.journal.length < 1) {
      axios.get('https://api.github.com/repos/Hasnayeen/hasnayeen.github.io/git/trees/9c93be45773cf8d8e9a315bb357ddf769929a401')
        .then((response) => {
          window.data.journal = response.data.tree
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
