import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App sum={12} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
