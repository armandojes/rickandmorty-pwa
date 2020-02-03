import React, { useState } from 'react'
import style from './style'
import { useSelector, useDispatch } from 'react-redux'
import { setType, setFilters } from 'ducks/search'

const Filters = props => {
  const dispatch = useDispatch()
  const { type, filters } = useSelector(state => state.search)
  const [filterActive, setFilterActive] = useState(false)

  // definir filtros
  const statuses = ['all', 'alive', 'dead', 'unknown']
  const genders = ['all', 'female', 'male', 'genderless', 'unknown']
  const species = ['all', 'human', 'alien', 'mytholog', 'robot', 'vampire']

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
            <span onClick={() => setFilterActive(!filterActive)}>Filters</span>
          </div>
          {filterActive && (
            <>
              <div className={style.filter_type_content}>
                Status: {statuses.map(status => (
                  <div
                    key={status}
                    className={`${style.option} ${filters.status === status ? style.option_selected : ''}`}
                    onClick={() => { dispatch(setFilters({ status })) }}
                  >{status}
                  </div>
                ))}
              </div>
              <div className={style.filter_type_content}>
                Gender: {genders.map(gender => (
                  <div
                    key={gender}
                    className={`${style.option} ${filters.gender === gender ? style.option_selected : ''}`}
                    onClick={() => { dispatch(setFilters({ gender })) }}
                  >
                    {gender}
                  </div>
                ))}
              </div>
              <div className={style.filter_type_content}>
                Species: {species.map(specie => (
                  <div
                    key={specie}
                    className={`${style.option} ${filters.species === specie ? style.option_selected : ''}`}
                    onClick={() => { dispatch(setFilters({ species: specie })) }}
                  >
                    {specie}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Filters
