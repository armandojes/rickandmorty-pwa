// reducer principal de toda la aplicacion

import { combineReducers } from 'redux'

// reducers
import character from './character'

export default combineReducers(
  {
    character
  }
)
