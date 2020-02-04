import React, { useState, useEffect } from 'react'
import style from './style'
import Container from 'components/container'
import Filters from './filters'
import { searchEpisodes, setQuery, searchCharacter, setCurrentPage, setInitialState } from 'ducks/search'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [focus, setFocus] = useState(false)
  const { query, type, filters } = useSelector(state => state.search)
  const { location, push } = useHistory()
  const dispatch = useDispatch()

  const handlerSubmit = e => {
    dispatch(setCurrentPage(1))
    e.preventDefault()
    dispatch(setInitialState())
    if (type === 'episode') {
      dispatch(searchEpisodes())
    } else {
      dispatch(searchCharacter())
    }
  }

  // volver a la lista de resultados cuando cambie los filtros
  useEffect(() => {
    handlerFocus()
  }, [query, type, filters])

  const handlerFocus = (e) => {
    setFocus(true)
    if (location.pathname !== '/results') {
      push('/results')
    }
  }

  return (
    <Container className={style.content}>
      <form className={style.form} onSubmit={handlerSubmit}>
        <input
          value={query}
          onChange={e => dispatch(setQuery(e.target.value))}
          onFocus={handlerFocus}
          type='text'
          className={style.input}
        />
        <button className={style.buton} type='submit'>Search</button>
      </form>
      {focus && (
        <Filters />
      )}
    </Container>
  )
}

export default Search
