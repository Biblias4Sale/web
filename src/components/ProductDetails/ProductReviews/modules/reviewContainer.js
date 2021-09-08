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
                <div style={CenterCol}><a>{obj.user[0]}</a></div>
              </Col>
              <Col lg={11} style={SeparateCol} key={obj.user}>
                <div style={dateName}>
                  <h6>{obj.user}</h6>
                  <a style={dateStyle}>{obj.fecha}</a>
                </div>
                <div style={starColor}>{stars}</div>
                <div style={titleStyle}>
                  <a>{obj.tittle}</a>
                </div>
                <div style={descriptionStyle}>
                  <a>{obj.description}</a>
                </div>
              </Col>
            </Container>
          </div>
        )
      })}
    </>
  )
}
