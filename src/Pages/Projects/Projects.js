import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Project from './Components/Project'

export default class Projects extends Component {
  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lighter text-grey-darker') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-4 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-grey-light' : 'text-grey-darker') + ' no-underline absolute'} to='/' aria-label='Back to home'>
              <i className='fa fa-arrow-left' />
            </Link>
            <h1 className='text-center text-base' >
              All Projects
            </h1>
          </div>
          {window.data.projects.map((project) =>
            <Project key={project.step} project={project} />
          )}
        </div>
      </div>
    )
  }

  componentDidMount () {
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
