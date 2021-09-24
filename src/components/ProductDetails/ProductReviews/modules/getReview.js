import { ReviewContainer } from './reviewContainer'
import { containerReview } from '../ProductReviewStyle'
import { Col, Container } from 'react-bootstrap'
import { Pagination } from './pagesComponent/pagination'
import { useState } from 'react'

export const GetReview = ({ product }) => {
  const reviews = product.reviews
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 2
  const lastObj = currentPage * reviewsPerPage
  const firstObj = lastObj - reviewsPerPage
  const actualPage = reviews.slice(firstObj, lastObj)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container style={containerReview}>
      <Col lg={3} />
      <Col lg={6}>
        <ReviewContainer actualPage={actualPage} />
        <Pagination
          actualPage={actualPage}
          reviews={reviews}
          reviewsPerPage={reviewsPerPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          firstObj={firstObj}
          lastObj={lastObj}
        />
      </Col>
      <Col lg={3} />
    </Container>
  )
}
