import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadCharacter } from 'ducks/character'
import View from './view.jsx'

const Character = () => {
  const { id } = useParams()
  const { data, loading, error } = useSelector(state => state.character)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCharacter(id))
  }, [])

  return (
    <View
      data={data}
      loading={loading}
      error={error}
    />
  )
}

export default Character
