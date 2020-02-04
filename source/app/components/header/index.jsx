import React from 'react'
import Container from 'components/container'
import style from './style'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className={style.header}>
    <Container className={style.content}>
      <Link to='/'>
        <img
          className={style.logo}
          src='/public/logo.png'
          alt='logo name'
        />
      </Link>
    </Container>
  </header>
)

export default Header
