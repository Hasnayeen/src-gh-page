import React, { Component } from 'react'

const modalStyle = {
  top: '20vh'
}

export default class ForHire extends Component {
  render() {
    return (
      <div className={(this.props.darkThemeActive ? 'bg-indigo-dark text-white' : 'bg-white text-grey-darker') + ' fixed p-8 rounded z-10 text-lg'} style={modalStyle}>
        {this.props.availability.available ?
        <div>
          I'm currently available for new opportunities, {this.props.availability.hours} hours per week @ {this.props.availability.rate} <br/>
          Reach me at searching.nehal@gmail.com
        </div>
          :
        <div>
          I'm currently not available
        </div>
        }
      </div>
    )
  }
}
