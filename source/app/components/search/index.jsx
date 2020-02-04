import React, { useState } from 'react'
import style from './style'
import Container from 'components/container'
import Filters from './components/filters'
import { searchEpisodes, setQuery, searchCharacter, setCurrentPage } from 'ducks/search'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [focus, setFocus] = useState(false)
  const { query, type } = useSelector(state => state.search)
  const { location, push } = useHistory()
  const dispatch = useDispatch()

  const handlerSubmit = e => {
    dispatch(setCurrentPage(1))
    e.preventDefault()
    if (type === 'episode') {
      dispatch(searchEpisodes())
    } else {
      dispatch(searchCharacter())
    }
  }

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
