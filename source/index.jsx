import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(<Client />, document.getElementById('render_target'))
