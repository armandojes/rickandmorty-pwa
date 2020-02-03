import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import Container from 'components/Container'
import Character from 'components/character'
import Paginate from 'components/paginate'

const ListCharacters = props => {
  if (props.loading) {
    return (
      <Container className={style.container}>
        <Character loading={props.loading} />
        <Character loading={props.loading} />
        <Character loading={props.loading} />
        <Character loading={props.loading} />
      </Container>
    )
  }
  return (
    <Container>
      <div className={style.container}>
        {props.items.map(item =>
          <Character
            key={item.id}
            loading={props.loading}
            {...item}
          />
        )}
      </div>
      <Paginate 
        pages={5}
        currentPage={2}
      />
    </Container>
  )
}

ListCharacters.propTypes = {
  loading: propTypes.bool,
  items: propTypes.array
}
export default ListCharacters
