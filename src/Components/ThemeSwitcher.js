import React, { Component } from 'react'

export default class ThemeSwitcher extends Component {
  constructor (props) {
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  render () {
    return (
      <div className='fixed w-full mt-2 -ml-2'>
        <div className='flex flex-row justify-end'>
          <div className={'w-10 h-4 rounded-full flex flex-row items-center p-1 cursor-pointer ' + (this.props.darkThemeActive ? 'bg-indigo-light justify-end' : 'bg-white justify-start')} onClick={this.toggleTheme} >
            <div className={'rounded-full w-3 h-3 ' + (this.props.darkThemeActive ? 'bg-white' : 'bg-indigo-light')} />
          </div>
        </div>
      </div>
    )
  }

  toggleTheme () {
    this.props.toggleTheme()
  }
}
