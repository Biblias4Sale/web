import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getReviews } from '../../../../redux/actions'
import { ReviewContainer } from './reviewContainer'
import { containerReview } from '../ProductReviewStyle'
import { Col, Container } from 'react-bootstrap'

export const GetReview = () => {
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  return (
    <Container style={containerReview}>
      <Col lg={3} />
      <Col lg={6}>
        <ReviewContainer reviews={reviews} />
      </Col>
      <Col lg={3} />
    </Container>
  )
}
