import { useState } from 'react'

export const Statements = (finalList) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 15
  const lastObj = currentPage * productsPerPage
  const firstObj = lastObj - productsPerPage
  const product = finalList.slice(firstObj, lastObj)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return {
    productsPerPage,
    lastObj,
    firstObj,
    product,
    pages,
    setCurrentPage,
    currentPage
  }
}
