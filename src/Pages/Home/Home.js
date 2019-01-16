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
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lighter text-grey-darker') + ' w-5/6 xl:w-1/2 flex flex-col justify-center items-center py-4 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <img src='https://images.unsplash.com/photo-1545167239-830ca6e31929?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' alt='Flames by Mahfuzur Rahman on Unsplash' className='w-24 h-24 rounded-full' />
          <h1 className={(this.props.darkThemeActive ? 'text-white' : 'text-indigo') + ' lg:text-2xl text-2xl py-4 uppercase tracking-wide text-center font-semibold'}>
            Nehal <span className='pl-2'>Hasnayeen</span>
          </h1>
          <div className='text-center text-lg'>
            A full-stack developer from <span className={(this.props.darkThemeActive ? 'text-orange-light' : 'text-indigo-dark')}>Dhaka, Bangladesh</span> writing code for food.
            <Link to='/about' className={(this.props.darkThemeActive ? 'text-blue-light' : 'text-blue-dark') + ' no-underline'} > Learn more →</Link>
          </div>
          <SocialLinks darkThemeActive={this.props.darkThemeActive} />
          <div className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' flex flex-row justify-around px-8 w-full border-t border-orange-lighter'}>
            <Link to='/about' className='no-underline py-4 text-inherit hover:border-orange-dark border-b border-transparent'>About</Link>
            <span className='border-l border-orange-lighter py-4' />
            <Link to='/reading' className='no-underline py-4 text-inherit hover:border-orange-dark border-b border-transparent'>Reading</Link>
            <span className='border-r border-orange-lighter py-4' />
            <Link to='/now' className='no-underline py-4 text-inherit hover:border-orange-dark border-b border-transparent'>Now</Link>
            <span className='border-r border-orange-lighter py-4' />
            <Link to='/journal-list' className='no-underline py-4 text-inherit hover:border-orange-dark border-b border-transparent'>Journal</Link>
            <span className='border-r border-orange-lighter py-4' />
            <Link to='/listening' className='no-underline py-4 text-inherit hover:border-orange-dark border-b border-transparent'>Listening</Link>
          </div>
          <div className='w-full pt-8 border-t border-orange-lighter'>
            <div className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' text-sm pb-1'}>
              <span className=''>
                Posts
              </span>
              <Link to='/posts' className='float-right no-underline text-blue hover:font-semibold'>See All</Link>
            </div>
            {window.data.blog.map((post, i = 1) => {
              i++
              return <Post key={post.id} post={post} darkThemeActive={this.props.darkThemeActive} />
            })}
          </div>
          <div className='w-full pt-8 border-t border-orange-lighter'>
            <div className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' text-sm pb-1'}>
              <span className=''>
                Projects
              </span>
              <Link to='/projects' className='float-right no-underline text-blue hover:font-semibold'>See All</Link>
            </div>
            {window.data.projects.map((project, i = 1) => {
              i++
              if (i < 3) {
                return <Project key={project.step} project={project} darkThemeActive={this.props.darkThemeActive} />
              }
              return false
            })}
          </div>
        </div>
      </div>
    )
  }

  componentWillMount () {
    if (window.data.blog.length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/blog.json')
        .then((response) => {
          window.data.blog = response.data
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
