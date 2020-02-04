import React, { useEffect } from 'react'
import { loadItems } from 'ducks/home'
import { useDispatch, useSelector } from 'react-redux'
import View from './view'

const Home = () => {
  const dispatch = useDispatch()
  const { episodes, characters, loading } = useSelector(state => state.home)

  useEffect(() => {
    dispatch(loadItems())
  }, [])

  return (
    <View
      episodes={episodes}
      characters={characters}
      loading={loading}
    />
  )
}

export default Home
