import React, { useState } from 'react'
import style from './style'
import Container from 'components/container'
import Filters from './components/filters'

const Search = () => {
  const [focus, setFocus] = useState(false)

  return (
    <Container className={style.content}>
      <form className={style.form}>
        <input
          onFocus={() => setFocus(true)}
          type='text'
          className={style.input}
        />
        <button className={style.buton} type='submit'>Search</button>
      </form>
      {focus && (
        <Filters />
      )}
    </Container>
  )
}

export default Search
