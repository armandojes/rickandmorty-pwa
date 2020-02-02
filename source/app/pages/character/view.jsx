import React from 'react'
import style from './style'
import propsTypes from 'prop-types'
import Container from 'components/container'

const View = props => {
  if (props.error) return 'error'

  if (props.loading) {
    return (
      <Container className={style.content}>
        <section className={style.picture_container}>
          <div className={style.picture_shell} />
        </section>
        <section className={style.info_container}>
          <div className={style.row_content_shell} />
          <div className={style.row_content_shell} />
          <div className={style.row_content_shell} />
          <div className={style.row_content_shell} />
        </section>
      </Container>
    )
  }

  return (
    <Container className={style.content}>
      <section className={style.picture_container}>
        <img className={style.picture} src={props.data.image} />
      </section>
      <section className={style.info_container}>
        <h2 className={style.name}>{props.data.name}</h2>
        <div className={style.row_content}><span>Status:</span>{props.data.status}</div>
        <div className={style.row_content}><span>Species:</span>{props.data.species}</div>
        <div className={style.row_content}><span>Type:</span>{props.data.type}</div>
        <div className={style.row_content}><span>Gender:</span>{props.data.gender}</div>
        <div className={style.row_content}><span>Origin:</span>{props.data.origin.name}</div>
      </section>
    </Container>
  )
}

View.propTypes = {
  error: propsTypes.bool,
  loading: propsTypes.bool,
  data: propsTypes.object
}

export default View
