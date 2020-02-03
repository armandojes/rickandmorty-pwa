import React from 'react'
import style from './style'
import { useSelector, useDispatch } from 'react-redux'
import { setType, setFilters } from 'ducks/search'

const Filters = props => {
  const dispatch = useDispatch()
  const { type } = useSelector(state => state.search)

  // definir filtros
  const statuses = ['all', 'alive', 'dead', 'unknown']
  const genders = ['all', 'female', 'male', 'genderless', 'unknown']
  const species = ['all', 'humans', 'aliens', 'mythologs', 'robots', 'vampires']

  return (
    <div className={style.filters_content}>
      <div className={style.filter_type_content}>
        Type:
        <div className={`${style.option} ${type === 'character' ? style.option_selected : ''}`} onClick={() => { dispatch(setType('character')) }}>
          Character
        </div>
        <div className={`${style.option} ${type === 'episode' ? style.option_selected : ''}`} onClick={() => { dispatch(setType('episode')) }}>
          Episode
        </div>
      </div>
      {type === 'character' && (
        <>
          <div className={style.filter_type_content}>
            Status: {statuses.map(status => (
              <div key={status} className={style.option} onClick={() => { dispatch(setFilters({ status })) }}>
                {status}
              </div>
            ))}
          </div>
          <div className={style.filter_type_content}>
            Gender: {genders.map(gender => (
              <div key={gender} className={style.option} onClick={() => { dispatch(setFilters({ gender })) }}>
                {gender}
              </div>
            ))}
          </div>
          <div className={style.filter_type_content}>
            Species: {species.map(specie => (
              <div key={specie} className={style.option} onClick={() => { dispatch(setFilters({ specie })) }}>
                {specie}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Filters
