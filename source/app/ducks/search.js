import { createDuck } from 'redux-duck'
import { getEpisode, getCharacter } from 'rickmortyapi'

const duck = createDuck('serach')

// tipos de acciones
const SET_LOADING = duck.defineType('SET_LOADING')
const SET_ERROR = duck.defineType('SET_ERROR')
const SET_ITEMS = duck.defineType('SET_ITEMS')
const SET_TYPE = duck.defineType('SET_TYPE')
const SET_QUERY = duck.defineType('SET_QUERY')
const SET_FILTERS = duck.defineType('SET_FILTERS')
const SET_CURRENTPAGE = duck.defineType('SET_CURRENTPAGE')

// creadores de acciones
const setLoading = duck.createAction(SET_LOADING)
const setError = duck.createAction(SET_ERROR)
const setItems = duck.createAction(SET_ITEMS)
export const setQuery = duck.createAction(SET_QUERY)
export const setType = duck.createAction(SET_TYPE)
export const setFilters = duck.createAction(SET_FILTERS)
export const setCurrentPage = duck.createAction(SET_CURRENTPAGE)

// acciones asyncronas
export const searchEpisodes = () => async (dispatch, getState) => {
  dispatch(setLoading())
  const state = getState()
  const query = state.search.query
  const response = await getEpisode({ name: query })
  if (response.error) {
    dispatch(setError(response.error))
  } else {
    dispatch(setItems(response.results))
  }
}

export const searchCharacter = () => async (dispatch, getState) => {
  dispatch(setLoading())
  const state = getState()
  const { query, filters } = state.search
  const filter = { name: query }
  if (filters.gender !== 'all') { filter.gender = filters.gender }
  if (filters.status !== 'all') { filter.status = filters.status }
  if (filters.species !== 'all') { filter.species = filters.species }
  const response = await getCharacter(filter)
  if (response.error) {
    dispatch(setError(response.error))
  } else {
    dispatch(setItems(response.results))
  }
}

// estado inicial
const initialState = {
  query: '',
  loading: false,
  items: [],
  error: false,
  type: 'character',
  filters: {
    status: 'all',
    gender: 'all',
    species: 'all'
  },
  currentPage: 1
}

// reducer
export default duck.createReducer({
  [SET_TYPE]: (state, { payload }) => {
    return {
      ...state,
      type: payload
    }
  },
  [SET_LOADING]: (state, { payload }) => {
    return {
      ...state,
      loading: true,
      items: [],
      error: false
    }
  },
  [SET_FILTERS]: (state, { payload }) => {
    return {
      ...state,
      filters: { ...state.filters, ...payload }
    }
  },
  [SET_QUERY]: (state, { payload }) => {
    return {
      ...state,
      query: payload
    }
  },
  [SET_ERROR]: (state, { payload }) => {
    return {
      ...state,
      items: [],
      loading: false,
      error: payload
    }
  },
  [SET_ITEMS]: (state, { payload }) => {
    return {
      ...state,
      loading: false,
      error: false,
      items: payload
    }
  }
}, initialState)
