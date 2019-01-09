import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Post from './Components/Post'
import Project from './Components/Project'
import SocialLinks from './Components/SocialLinks'

export default class Home extends Component {
  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className='w-5/6 xl:w-1/2 flex flex-col justify-center items-center bg-grey-lighter py-4 lg:px-12 px-4 shadow text-grey-darker text-base leading-normal rounded'>
          <img src='https://images.unsplash.com/photo-1545167239-830ca6e31929?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' alt='Flames by Mahfuzur Rahman on Unsplash' className='w-24 h-24 rounded-full' />
          <h1 className='text-indigo lg:text-2xl text-2xl py-4 uppercase tracking-wide text-center font-semibold'>
            Nehal <span className='pl-2'>Hasnayeen</span>
          </h1>
          <div className='text-center text-lg'>
            A full-stack developer from <span className='text-indigo-dark'>Dhaka, Bangladesh</span> writing code for food.
            <Link to='/about' className='no-underline text-blue-dark' > Learn more →</Link>
          </div>
          <SocialLinks />
          <div className='flex flex-row justify-around px-8 w-full border-t border-orange-lighter'>
            <Link to='/about' className='no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent'>About</Link>
            <span className='border-l border-orange-lighter py-4' />
            <Link to='/reading' className='no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent'>Reading</Link>
            <span className='border-r border-orange-lighter py-4' />
            <Link to='/now' className='no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent'>Now</Link>
          </div>
          <div className='w-full pt-8 border-t border-orange-lighter'>
            <div className='text-sm pb-1 text-grey-darker'>
              <span className=''>
                Posts
              </span>
              <Link to='/posts' className='float-right no-underline text-blue hover:font-semibold'>See All</Link>
            </div>
            {window.data.posts.map((post, i = 1) => {
              i++
              if (i < 3) {
                return <Post key={post.id} post={post} />
              }
            })}
          </div>
          <div className='w-full pt-8 border-t border-red-lightest'>
            <div className='text-sm pb-1 text-grey-darker'>
              <span className=''>
                Projects
              </span>
              <Link to='/projects' className='float-right no-underline text-blue hover:font-semibold'>See All</Link>
            </div>
            {window.data.projects.map((project, i = 1) => {
              i++
              if (i < 3) {
                return <Project key={project.step} project={project} />
              }
            })}
          </div>
        </div>
      </div>
    )
  }

  componentWillMount () {
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
    if (window.data.projects.length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/projects.json')
        .then((response) => {
          window.data.projects = response.data
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
