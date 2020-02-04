// reducer principal de toda la aplicacion

import { combineReducers } from 'redux'

// reducers
import character from './character'
import episode from './episode'
import search from './search'
import home from './home'

export default combineReducers(
  {
    character,
    episode,
    search,
    home
  }
)
