import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import Container from 'components/Container'
import Character from 'components/character'
import Paginate from 'components/paginate'

const ListCharacters = props => {
  // si esta cargando renderizar shgell
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

  // reder de la vista con los datos
  return (
    <Container>
      <h1 className={style.title}>{props.title || 'Characters'}</h1>
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
        pages={props.pages || 1}
        currentPage={props.currentPage || 1}
      />
    </Container>
  )
}

// definir propsTypes
ListCharacters.propTypes = {
  loading: propTypes.bool,
  items: propTypes.array,
  pages: propTypes.number,
  currentPage: propTypes.number,
  title: propTypes.string
}
export default ListCharacters
