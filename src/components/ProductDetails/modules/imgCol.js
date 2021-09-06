import { Col, Image } from 'react-bootstrap'
import { ImgColStyle } from '../ProductDetailsStyle'

export const ImgCol = (img) => {
  return (
    <Col xs={12} lg={5} style={ImgColStyle}>
      <Image src={img} />
    </Col>
  )
}
