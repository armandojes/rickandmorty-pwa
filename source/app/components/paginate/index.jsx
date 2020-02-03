import React from 'react'
import style from './style'
import propTypes from 'prop-types'
import generatePages from 'helpers/generate_pages'
import { setCurrentPage } from 'ducks/search'
import { useDispatch } from 'react-redux'

const Paginate = props => {
  const listPages = generatePages(props.currentPage, props.pages)
  const dispatch = useDispatch()

  // no renderiza paginacion cuando solo existe una pagina
  if (props.pages <= 1) { return null }

  return (
    <section className={style.paginate_content}>
      {props.currentPage > 1 && (
        <div className={style.arrow_navigation} onClick={() => dispatch(setCurrentPage(props.currentPage - 1))}>
          back
        </div>
      )}
      {listPages.map(page => (
        <div
          onClick={() => dispatch(setCurrentPage(page))}
          key={page}
          className={`${style.arrow_navigation} ${page === props.currentPage ? style.arrow_navigation_selected : ''}`}
        >
          {page}
        </div>
      ))}
      {props.currentPage < props.pages && (
        <div className={style.arrow_navigation} onClick={() => dispatch(setCurrentPage(props.currentPage + 1))}>
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
