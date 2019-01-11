import React, { Component } from 'react'

export default class Project extends Component {
  render () {
    return (
      <div className='py-6 border-t' key={this.props.project.step}>
        <a className='no-underline text-xl font-semibold text-blue' href={this.props.project.url}>
          {this.props.project.name}
        </a>
        <div className='text-sm pl-1'>{this.props.project.desc}</div>
      </div>
    )
  }
}
