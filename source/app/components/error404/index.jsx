import React from 'react'
import style from './style'
import Container from 'components/container'
import propTypes from 'prop-types'

const Error404 = props => (
  <Container>
    <h2 className={style.title}>{props.title || 'Error 404 not foun'}</h2>
    <img src='/public/images/notResult.png' className={style.picture} />
  </Container>
)

Error404.propTypes = {
  title: propTypes.string
}

export default Error404
