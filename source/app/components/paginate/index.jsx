import React from 'react'
import style from './style'
import propTypes from 'prop-types'
import generatePages from 'helpers/generate_pages'

const Paginate = props => {
  const listPages = generatePages(props.currentPage, props.pages)

  return (
    <section className={style.paginate_content}>
      {props.currentPage > 1 && (
        <div className={style.arrow_navigation}>
          back
        </div>
      )}
      {listPages.map(page => (
        <div key={page} className={`${style.arrow_navigation} ${page === props.currentPage ? style.arrow_navigation_selected : ''}`}>{page}</div>
      ))}
      {props.currentPage < props.pages && (
        <div className={style.arrow_navigation}>
          next
        </div>
      )}
    </section>
  )
}

Paginate.propTypes = {
  pages: propTypes.number,
  currentPage: propTypes.number
}

export default Paginate
