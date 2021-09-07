import { Row } from 'react-bootstrap'
import { reviewStyle } from '../ProductReviewStyle'
import { Reviews } from './reviews'

export const ReviewContainer = () => {
  return (
    <>
      <Row lg={3} />
      <Row lg={6} style={reviewStyle}>
        <Reviews />
      </Row>
      <Row lg={3} />
    </>
  )
}
