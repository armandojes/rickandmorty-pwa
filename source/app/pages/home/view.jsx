import React from 'react'
import style from './style'
import Container from 'components/container'
import propTypes from 'prop-types'
import ListCharacters from 'components/list_characters'
import ListEpisodes from 'components/list_episodes'

const View = props => (
  <Container className={style.container}>
    <section className={style.landing}>
      Welcome to Rick and Morty Dex
    </section>
    <ListCharacters
      loading={props.loading}
      items={props.characters}
      title='Latest Charactres'
    />
    <ListEpisodes
      title='Latest episodes'
      loading={props.loading}
      items={props.episodes}
    />
  </Container>
)

View.propTypes = {
  episodes: propTypes.array,
  characters: propTypes.array,
  loading: propTypes.bool
}
export default View
