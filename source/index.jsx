import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './app/ducks/reducer'

// create store
// isProduction varible defined from webpack
// eslint-disable-next-line no-undef
const enhancer = isProduction
  ? applyMiddleware(ReduxThunk)
  : composeWithDevTools(applyMiddleware(ReduxThunk, logger))

// creando store
const store = createStore(
  reducer,
  enhancer
)

const Client = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)

render(<Client />, document.getElementById('render_target'))
