import { createDuck } from 'redux-duck'
import { getEpisode, getCharacter } from 'rickmortyapi'

const duck = createDuck('serach')

// tipos de acciones
const SET_LOADING = duck.defineType('SET_LOADING')
const SET_ERROR = duck.defineType('SET_ERROR')
const SET_ITEMS = duck.defineType('SET_ITEMS')
const SET_TYPE = duck.defineType('SET_TYPE')
const SET_FILTERS = duck.defineType('SET_FILTERS')
const SET_CURRENTPAGE = duck.defineType('SET_CURRENTPAGE')

// creadores de acciones
const setLoading = duck.createAction(SET_LOADING)
const setError = duck.createAction(SET_ERROR)
const setItems = duck.createAction(SET_ITEMS)
export const setType = duck.createAction(SET_TYPE)
export const setFilters = duck.createAction(SET_FILTERS)
const setCurrentPage = duck.createAction(SET_CURRENTPAGE)

// estado inicial
const initialState = {
  loading: false,
  items: [],
  error: false,
  type: 'episode',
  filters: {
    status: 'all',
    gender: 'all',
    specie: 'all'
  },
  currentPage: 1
}

// reducer
export default duck.createReducer({
  [SET_TYPE]: (state, { payload }) => {
    return {
      ...initialState,
      type: payload
    }
  },
  [SET_FILTERS]: (state, { payload }) => {
    return {
      ...state,
      filters: { ...state.filters, ...payload }
    }
  }
}, initialState)
