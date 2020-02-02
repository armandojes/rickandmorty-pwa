// reducer principal de toda la aplicacion

import { combineReducers } from 'redux'

// reducers
import character from './character'
import episode from './episode'

export default combineReducers(
  {
    character,
    episode
  }
)
