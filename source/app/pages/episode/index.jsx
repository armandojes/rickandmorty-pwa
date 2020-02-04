import React, { useEffect } from 'react'
import { loadEpisode } from 'ducks/episode'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import View from './view'

const Episode = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data, loading, error } = useSelector(state => state.episode)

  useEffect(() => {
    dispatch(loadEpisode(id))
  }, [])

  return (
    <View
      data={data}
      loading={loading}
      error={error}
    />
  )
}

export default Episode
