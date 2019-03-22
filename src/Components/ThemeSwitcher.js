import React, { Component } from 'react'

export default class ThemeSwitcher extends Component {
  constructor (props) {
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  render () {
    return (
      <div className='fixed w-full'>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-row bg-grey-dark p-1 rounded-b'>
            <i className='fas fa-sun pr-1 mr-1 text-grey-lighter'></i>
            <div className={'w-10 h-4 rounded-full flex flex-row items-center p-1 cursor-pointer ' + (this.props.darkThemeActive ? 'bg-indigo-light justify-end' : 'bg-white justify-start')} onClick={this.toggleTheme} >
              <div className={'rounded-full w-3 h-3 ' + (this.props.darkThemeActive ? 'bg-white' : 'bg-indigo-light')} />
            </div>
            <i className='fas fa-moon pl-1 ml-1 text-grey-lighter'></i>
          </div>
        </div>
      </div>
    )
  }

  toggleTheme () {
    this.props.toggleTheme()
  }
}
