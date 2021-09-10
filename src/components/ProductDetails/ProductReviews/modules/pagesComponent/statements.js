import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Statements = () => {

  const reviews = useSelector(state => state.reviews)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 2
  const lastReview = currentPage * reviewsPerPage
  const firstReview = lastReview - reviewsPerPage
  const reviewsLength = reviews.slice(firstReview, lastReview)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return {
    reviewsPerPage,
    reviewsLength,
    pages
  }
}
