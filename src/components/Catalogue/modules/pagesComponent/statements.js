import { useState } from 'react'

export const Statements = (finalList) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 15
  const lastProduct = currentPage * productsPerPage
  const firstProduct = lastProduct - productsPerPage
  const product = finalList.slice(firstProduct, lastProduct)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return {
    productsPerPage,
    lastProduct,
    firstProduct,
    product,
    pages,
    setCurrentPage,
    currentPage
  }
}
