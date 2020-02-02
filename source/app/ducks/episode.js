import { createDuck } from 'redux-duck'
import { getEpisode } from 'rickmortyapi'

const duck = createDuck('episode')

// tipos de acciones
const SET_LOADING = duck.defineType('SET_LOADING')
const SET_EPISODE = duck.defineType('SET_CHARACTER')
const SET_ERROR = duck.defineType('SET_ERROR')

// creadores de acciones
export const setLoading = duck.createAction(SET_LOADING)
export const setEpisode = duck.createAction(SET_EPISODE)
export const setError = duck.createAction(SET_ERROR)

// creadores de acciones asyncronos
export const loadEpisode = id => async dispatch => {
  const response = await getEpisode(parseInt(id))
  dispatch(setEpisode(response))
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
      ...state,
      loading: true
    }
  },
  [SET_EPISODE]: (state, { payload }) => {
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
}, initialState);