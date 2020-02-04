import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './style'

const Character = props => {
  if (props.loading) {
    return (
      <div className={style.content} to={`/character/${props.id}`}>
        <div className={`${style.body} ${style.body_shell}`}>
          <div src={props.image} className={style.picture_shell} />
          <h3 className={style.name_shell} />
        </div>
      </div>
    )
  }

  return (
    <Link className={style.content} to={`/episode/${props.id}`}>
      <div className={style.body}>
        <img
          src={`/public/images/${props.id}.jpg`}
          className={style.picture}
          alt={props.name}
        />
        <h3 className={style.name}>{props.name}</h3>
      </div>
    </Link>
  )
}

Character.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  id: propTypes.number,
  loading: propTypes.bool
}

export default Character
