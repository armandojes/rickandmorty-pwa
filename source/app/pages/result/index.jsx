import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchEpisodes, searchCharacter } from 'ducks/search'

const Result = () => {
  const { loading, type, error, currentPage, items, filters } = useSelector(state => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'episode') {
      dispatch(searchEpisodes())
    } else {
      dispatch(searchCharacter())
    }
  }, [type, filters])

  if (loading) {
    return 'loading'
  }

  if (error) {
    return error
  }

  return (
    <div>
      <h1>{currentPage}</h1>
      <div>
        {items.map(item => <div key={item.id}>{item.name}</div>)}
      </div>
    </div>
  )
}

export default Result
