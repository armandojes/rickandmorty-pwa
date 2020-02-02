import React from 'react'
import Container from 'components/container'
import style from './style'

const Header = () => (
  <header className={style.header}>
    <Container className={style.content}>
      <img className={style.logo} src='/public/logo.png' />
    </Container>
  </header>
)

export default Header
