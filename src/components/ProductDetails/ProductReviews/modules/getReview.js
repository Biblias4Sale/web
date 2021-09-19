import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../../../redux/actions'
import { ReviewContainer } from './reviewContainer'
import { containerReview } from '../ProductReviewStyle'
import { Col, Container } from 'react-bootstrap'
import { Pagination } from './pagesComponent/pagination'
import { Statements } from './pagesComponent/statements'

export const GetReview = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  const {
    reviewsPerPage,
    actualPage,
    pages,
    setCurrentPage,
    currentPage,
    reviews,
    firstObj,
    lastObj
  } = Statements()

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
