import React from 'react'
import propTypes from 'prop-types'
import style from './style'

// Container limita el ancho maximo en tamaños de pantallas
// y agrega padding de 10 px en dispositivos moviles
const Container = props => (
  <div className={`${style.container} ${props.className || ''}`}>
    {props.children}
  </div>
)

Container.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ]),
  className: propTypes.string
}

export default Container
