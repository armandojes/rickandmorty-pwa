import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import Container from 'components/Container'
import Episode from 'components/episode'
import Paginate from 'components/paginate'

const ListEpisodes = props => {
  // renderizar shell mientras esta cargando los datos
  if (props.loading) {
    return (
      <Container className={style.container}>
        <Episode loading={props.loading} />
        <Episode loading={props.loading} />
        <Episode loading={props.loading} />
      </Container>
    )
  }

  // render de elementos con los datos
  return (
    <Container>
      <h1 className={style.title}>{props.title || 'Episodes'}</h1>
      <div className={style.container}>
        {props.items.map(item =>
          <Episode
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

// definir propTypes
ListEpisodes.propTypes = {
  loading: propTypes.bool,
  items: propTypes.array,
  pages: propTypes.number,
  currentPage: propTypes.number,
  title: propTypes.string
}

export default ListEpisodes
