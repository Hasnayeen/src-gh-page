import React, { Component } from 'react'

export default class Project extends Component {
  render () {
    return (
      <div>
        <a href={this.props.project.url} className='no-underline text-blue text-lg'>
          {this.props.project.name} →
        </a>
        <div className={(this.props.darkThemeActive ? 'text-grey-lighter' : 'text-grey-darker') + ' text-xs font-medium pb-4'}>
          {this.props.project.desc}
        </div>
      </div>
    )
  }
}
