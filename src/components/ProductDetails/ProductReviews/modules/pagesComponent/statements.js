import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Statements = () => {
  const reviews = useSelector(state => state.reviews)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 2
  const lastObj = currentPage * reviewsPerPage
  const firstObj = lastObj - reviewsPerPage
  const actualPage = reviews.slice(firstObj, lastObj)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return {
    firstObj,
    lastObj,
    reviewsPerPage,
    actualPage,
    pages,
    setCurrentPage,
    reviews,
    currentPage
  }
}
