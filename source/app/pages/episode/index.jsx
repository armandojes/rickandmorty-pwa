import React, { useEffect } from 'react'
import { loadEpisode } from 'ducks/episode'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const Episode = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadEpisode(id))
  }, [])

  return (
    <div>
      hello episode
    </div>
  )
}

export default Episode
