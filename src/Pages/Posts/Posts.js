import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Post from './Components/Post'

export default class Posts extends Component {
  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lighter text-grey-darker') + ' w-5/6 xl:w-1/2 flex flex-col justify-center bg-grey-lightest py-4 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/' aria-label='Back to home'>
              <i className='fa fa-arrow-left' />
            </Link>
            <h1 className='text-center text-base' >
              All Posts
            </h1>
          </div>
          {window.data.posts.map((post) =>
            <Post key={post.id} post={post} darkThemeActive={this.props.darkThemeActive} />
          )}
        </div>
      </div>
    )
  }

  componentDidMount () {
    if (window.data.posts.length < 1) {
      axios.get('https://bbgz75j470.execute-api.us-east-1.amazonaws.com/prod/posts')
        .then((response) => {
          var resp = JSON.parse(response.data.body)
          window.data.posts = Object.keys(resp).map((key) => {
            let date = new Date(resp[key].firstPublishedAt)
            let item = {
              id: resp[key].id,
              title: resp[key].title,
              slug: resp[key].uniqueSlug,
              date: date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate() + ',' + date.getFullYear(),
              published: resp[key].firstPublishedAt
            }
            return item
          })
          window.data.posts.sort((a, b) => {
            if (a.published > b.published) return -1
            if (a.published < b.published) return 1
            return 0
          })
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
