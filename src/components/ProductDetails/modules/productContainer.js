import { Container, Row } from 'react-bootstrap'
import { ImgCol } from './imgCol'
import { DetailsCol } from './detailsCol'
import { ProductContainerStyle } from '../ProductDetailsStyle'

export const ProductContainer = ({ product }) => {
  return (
    <Container style={ProductContainerStyle}>
      <Row>
        <ImgCol />
        <DetailsCol product={product} />
      </Row>
    </Container>
  )
}
