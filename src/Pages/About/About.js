import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lighter text-grey-darker') + ' w-5/6 xl:w-1/2 flex flex-col justify-center bg-grey-lightest py-8 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className='no-underline text-grey-darker absolute' to='/'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              About Me
            </div>
          </div>
          <div className='py-4 text-center text-xl leading-loose'>
            Introvert, day dreamer, minimalist, mostly realistic and sometimes idealistic.<br />
            I'm very lazy and love to sleep. <span className='text-teal-light'>Ssshhh! Don't wake me up.</span>
          </div>
          <div className='pt-8 text-left text-xl font-medium'>
            About Work
          </div>
          <div className='py-3'>
            I build simple & functional custom web applications with rich UX.
          </div>
          <div className='py-3'>
            I work on both backend (php7) and frontend (es6) mainly on Laravel & Vue/React stack. I follow TDD approach on both end for professional work. I use linux machine and docker based tools for local development and production. <a href='/projects' className='no-underline text-blue-light'>Projects</a>
          </div>
          <div className='py-3'>
                I like to learn new stuff & experiment. I'm exploring golang, graphql and serverless technology and looking forward to learn React Native.
            <a href='/now' className='no-underline text-blue-light'> Now?</a>
          </div>
          <div className='pt-4 text-left text-xl font-medium'>
            Approach to Work
          </div>
          <div className='py-3'>
            I try to build simple & minimum solution that is easily understandable & requires minimum amount of code.
          </div>
          <div className='py-3'>
              I prefer -
            <ul>
              <li>
                usability over innovation
              </li>
              <li>
                code readibility over performance
              </li>
              <li>
                creative freedom in work
              </li>
              <li>
                transparent open discussion over rigid behind the door decision
              </li>
              <li>
                early user feedback over feature perfection and project completion
              </li>
            </ul>
          </div>
          <div className='py-3'>
            I don't like -
            <ul>
              <li>
                unnecessary meetings and manager/delegator
              </li>
              <li>
                bureaucracy, long unnecessary process/formalities, policies (overreaction to situation)
              </li>
              <li>
                four letter words, ["easy", "need", "can't", "just", "only", "ASAP"]
              </li>
              <li>
                vague "estimation" (guesstimation)
              </li>
            </ul>
          </div>
          <div className='pt-4 text-left text-xl font-medium'>
            Work Timeline
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2014: Started learning php to pursue a career in web development.
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2015: Worked for Techbeeo Software Ltd BD to build new module and customizing existing module of a open source ERP system built on Java platform.
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2015: Dedicated few months on learning Laravel & VueJS full time to become full stack developer.
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2016: Worked for P1, Bashundhara Group. Built and maintained an API microservice for media management to serve several web and mobile application frontend using laravel and aws services.
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2017: Worked for Small Success LLC (USA). Built and integrated a Q/A module in a existing application built on Laravel & VueJS stack.
          </div>
          <div className='py-3'>
            <span className='font-bold text-lg'>→</span> 2018: Exploring golang, graphql and aws lambda (serverless tech).
          </div>
          <div className='pt-8 mt-4 text-left text-xl font-medium'>
            Personal
          </div>
          <div className='py-3'>
            I like to read non-fictional books (<Link to='/reading' className='no-underline text-blue-light'>Check my reading list</Link>). I like to cook and experiment with new recipes. I like to watch travel videos of different places of scenic beauty.
          </div>
        </div>
      </div>
    )
  }
}
