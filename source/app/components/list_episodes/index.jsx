import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import Container from 'components/Container'
import Episode from 'components/episode'
import Paginate from 'components/paginate'

const ListEpisodes = props => {
  if (props.loading) {
    return (
      <Container className={style.container}>
        <Episode loading={props.loading} />
        <Episode loading={props.loading} />
        <Episode loading={props.loading} />
      </Container>
    )
  }
  return (
    <Container>
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
        pages={props.pages}
        currentPage={props.currentPage}
      />
    </Container>
  )
}

ListEpisodes.propTypes = {
  loading: propTypes.bool,
  items: propTypes.array,
  pages: propTypes.number,
  currentPage: propTypes.number
}

export default ListEpisodes
