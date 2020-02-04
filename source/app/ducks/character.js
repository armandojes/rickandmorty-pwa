import { createDuck } from 'redux-duck'
import { getCharacter } from 'rickmortyapi'

const duck = createDuck('character')

// tipos de acciones
const SET_LOADING = duck.defineType('SET_LOADING')
const SET_CHARACTER = duck.defineType('SET_CHARACTER')
const SET_ERROR = duck.defineType('SET_ERROR')

// creadores de acciones
export const setLoading = duck.createAction(SET_LOADING)
export const setCharacter = duck.createAction(SET_CHARACTER)
export const setError = duck.createAction(SET_ERROR)

// creadores de acciones asyncronos
export const loadCharacter = id => async dispatch => {
  dispatch(setLoading(true))
  const response = await getCharacter(parseInt(id))
  dispatch(setCharacter(response))
}

// estado inicial 
const initialState = {
  loading: true,
  data: null,
  error: false
}

// reducer
export default duck.createReducer({
  [SET_LOADING]: (state, { payload }) => {
    return {
      ...initialState,
      loading: true
    }
  },
  [SET_CHARACTER]: (state, { payload }) => {
    return {
      ...state,
      loading: false,
      data: payload
    }
  },
  [SET_ERROR]: (state, { payload }) => {
    return {
      loading: false,
      error: true,
      data: null
    }
  },
}, initialState)
