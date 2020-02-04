import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchEpisodes, searchCharacter } from 'ducks/search'
import ListCharacters from 'components/list_characters'
import ListEpisodes from 'components/list_episodes'
import Error404 from 'components/error404'

const Result = () => {
  const { loading, type, error, currentPage, items, filters, pages } = useSelector(state => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'episode') {
      dispatch(searchEpisodes())
    } else {
      dispatch(searchCharacter())
    }
  }, [type, filters, currentPage])

  if (error) {
    return (
      <Error404 title={error} />
    )
  }

  if (type === 'episode') {
    return (
      <ListEpisodes
        loading={loading}
        error={error}
        currentPage={currentPage}
        items={items}
        pages={pages}
      />
    )
  } else {
    return (
      <ListCharacters
        loading={loading}
        error={error}
        currentPage={currentPage}
        items={items}
        pages={pages}
      />
    )
  }
}

export default Result
