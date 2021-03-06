import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Book from './Components/Book'

export default class Reading extends Component {
  render () {
    const books = (Object.keys(window.data.reading).length > 0) ? (
      window.data.reading.books.map((book) =>
        <Book key={book.id} book={book} darkThemeActive={this.props.darkThemeActive} />
      )
    ) : (
      <div />
    )

    const current = (Object.keys(window.data.reading).length > 0) ? (
      <div>
        <a className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' no-underline text-xl font-semibold'} href={window.data.reading.current.url} rel='noreferrer noopener' target='_blank'>
          {window.data.reading.current.title}
        </a>
        <div className='text-xs'>
          by <span className={(this.props.darkThemeActive ? 'text-white' : 'text-grey-darkest') + ' text-sm pl-1'}>
            {window.data.reading.current.author}
          </span>
        </div>
      </div>
    ) : (
      <div />
    )
    return (
      <div className='w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8'>
        <div className='lg:h-16 h-8' />
        <div className={(this.props.darkThemeActive ? 'bg-indigo-darkest text-white' : 'bg-grey-lighter text-grey-dark') + ' w-5/6 xl:w-1/2 flex flex-col justify-center py-4 lg:px-12 px-4 shadow text-base leading-normal rounded'}>
          <div className='text-orange-dark py-4 uppercase tracking-wide font-semibold'>
            <Link className={(this.props.darkThemeActive ? 'text-white' : 'text-grey-darker') + ' no-underline absolute'} to='/'>
              <i className='fa fa-arrow-left' />
            </Link>
            <div className='text-center' >
              My Reading List
            </div>
          </div>
          <div className='py-8 mb-4'>
            Currently Reading:
            {current}
          </div>
          {books}
        </div>
      </div>
    )
  }

  componentWillMount () {
    if (Object.keys(window.data.reading).length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/reading.json')
        .then((response) => {
          window.data.reading = response.data
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
