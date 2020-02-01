// reducer principal de toda la aplicacion

import { combineReducers } from 'redux'

// reducers
import profile from './profile'

export default combineReducers(
  {
    profile
  }
)
