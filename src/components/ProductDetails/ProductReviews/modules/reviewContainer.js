import { Container, Col } from 'react-bootstrap'
import { contReview, dateName, titleStyle, descriptionStyle, starColor, dateStyle, CenterCol, SeparateCol } from '../ProductReviewStyle'
import { BsStarFill } from 'react-icons/bs'

export const ReviewContainer = ({ reviews }) => {
  return (
    <>
      {reviews.map((obj) => {
        const stars = []
        for (let i = 0; i < obj.points; i++) {
          stars.push(<BsStarFill />)
        }
        return (
          <div key={obj.user}>
            <hr style={{ width: '100%' }} />
            <Container key={obj.user} style={contReview}>
              <Col lg={1}>
                <div style={CenterCol}><div>{obj.user[0]}</div></div>
              </Col>
              <Col lg={11} style={SeparateCol} key={obj.user}>
                <div style={dateName}>
                  <h6>{obj.user}</h6>
                  <div style={dateStyle}>{obj.fecha}</div>
                </div>
                <div style={starColor}>{stars}</div>
                <div style={titleStyle}>
                  <div>{obj.tittle}</div>
                </div>
                <div style={descriptionStyle}>
                  <div>{obj.description}</div>
                </div>
              </Col>
            </Container>
          </div>
        )
      })}
    </>
  )
}
