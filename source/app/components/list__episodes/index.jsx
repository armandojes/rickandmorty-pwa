import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import Container from './node_modules/components/Container'
import Character from './node_modules/components/character'
import Paginate from './node_modules/components/paginate'

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
        pages={props.pages}
        currentPage={props.currentPage}
      />
    </Container>
  )
}

ListCharacters.propTypes = {
  loading: propTypes.bool,
  items: propTypes.array,
  pages: propTypes.number,
  currentPage: propTypes.number
}
export default ListCharacters
