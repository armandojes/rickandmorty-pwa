import React from 'react'
import { render } from 'react-router-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('render_target')
)