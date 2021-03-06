import React, { Component } from 'react'
import axios from 'axios'

export default class SocialLinks extends Component {
  render () {
    return (
      <div className='flex flex-row justify-around lg:px-8 py-8 w-full'>
        {window.data.socialLinks.map((item) =>
          <a key={item.id} className={(this.props.darkThemeActive ? 'text-grey-lighter bg-indigo-darker' : 'text-grey-darker bg-grey-light') + ' rounded shadow px-4 py-2 no-underline text-3xl'} href={item.url} aria-label={item.url}>
            <i className={item.icon} />
          </a>
        )}
      </div>
    )
  }

  componentDidMount () {
    if (window.data.socialLinks.length < 1) {
      axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/data/data/social-link.json')
        .then((response) => {
          window.data.socialLinks = response.data
          this.forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
