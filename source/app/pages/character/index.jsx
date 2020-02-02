import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadCharacter } from 'ducks/character'

const Character = () => {
  const { id } = useParams()
  const { data, loading, error } = useSelector(state => state.character)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCharacter(id))
  }, [])

  console.log('render')

  return (
    <div>
      hello profile
    </div>
  )
}

export default Character
