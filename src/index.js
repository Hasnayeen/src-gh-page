import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

window.data = {
  'images': [],
  'blog': [],
  'posts': [],
  'projects': [],
  'reading': {},
  'listening': {},
  'socialLinks': [],
  'journal': [],
  'darkThemeActive': false
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
