// genera un array lista de paginas disponibles para renderizar
function generatePages (currentPage, pages) {
  const pagesGenerated = []
  var index

  if (currentPage < 3 || pages <= 5) { index = 1 } else if ((currentPage + 2) > pages) { index = pages - 4 } else { index = currentPage - 2 }

  while (pagesGenerated.length < 5) {
    pagesGenerated.push(index)
    index++
    if (index > pages) { break }
  }
  return pagesGenerated
}

export default generatePages
