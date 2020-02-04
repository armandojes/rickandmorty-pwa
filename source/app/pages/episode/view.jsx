import React from 'react'
import propsTypes from 'prop-types'
import style from './style'
import Container from 'components/container'
import parseEpisodeName from 'helpers/parse_episode'

const View = props => {
  if (props.loading) {
    return (
      <Container className={style.container}>
        <div className={style.name_shell} />
        <div className={style.content}>
          <div className={style.picture_content}>
            <img className={style.picture_shell} />
          </div>
          <div className={style.data_content}>
            <div className={style.data_row_shell} />
            <div className={style.data_row_shell} />
            <div className={style.data_row_shell} />
          </div>
        </div>
      </Container>
    )
  }

  if (props.error) {
    return 'error pagina no encotrada...'
  }

  const { season, episode } = parseEpisodeName(props.data.episode)

  return (
    <Container className={style.container}>
      <h1 className={style.name}>{props.data.name}</h1>
      <div className={style.content}>
        <div className={style.picture_content}>
          <img src={`/public/images/${props.data.id}.jpg`} alt={props.data.name} className={style.picture} />
        </div>
        <div className={style.data_content}>
          <div className={style.data_row}>
            <span>Air date:</span> {props.data.air_date}
          </div>
          <div className={style.data_row}>
            <span>Season:</span> {season}
          </div>
          <div className={style.data_row}>
            <span>Episode:</span> {episode}
          </div>
        </div>
      </div>
    </Container>
  )
}

View.propTypes = {
  error: propsTypes.bool,
  loading: propsTypes.bool,
  data: propsTypes.object
}

export default View
