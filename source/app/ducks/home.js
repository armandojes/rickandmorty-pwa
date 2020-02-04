import { createDuck } from 'redux-duck'
import { getEpisode, getCharacter } from 'rickmortyapi'

const duck = createDuck('home')

// tipos de acciones
const SET_LOADING = duck.defineType('SET_LOADING')
const SET_ITEMS = duck.defineType('SET_ITEMS')

// creadores de acciones
export const setLoading = duck.createAction(SET_LOADING)
export const setItems = duck.createAction(SET_ITEMS)

// creadores de acciones asyncronos
export const loadItems = () => async dispatch => {
  dispatch(setLoading())
  const [characters, episodes] = await Promise.all([getCharacter({ page: 25 }), getEpisode({ page: 2 })])
  dispatch(setItems({
    characters: characters.results.slice(-4),
    episodes: episodes.results.slice(-3)
  }))
}
// estado inicial
const initialState = {
  loading: true,
  characters: [],
  episodes: []
}

// reducer
export default duck.createReducer({
  [SET_LOADING]: (state, { payload }) => {
    return {
      ...initialState,
      loading: true
    }
  },
  [SET_ITEMS]: (state, { payload }) => {
    return {
      loading: false,
      characters: payload.characters,
      episodes: payload.episodes
    }
  }
}, initialState)
