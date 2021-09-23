import { Container, Row } from 'react-bootstrap'
import { ImgCol } from './imgCol'
import { DetailsCol } from './detailsCol'
import { ProductContainerStyle } from '../ProductDetailsStyle'
import { ButtonLike } from '../../common/ButtonLike'
import { useSelector } from 'react-redux'

export const ProductContainer = ({ product }) => {
  const logged = useSelector(state => state.logged)
  return (
    <Container style={ProductContainerStyle}>
      <Row>
        {logged
          ? (
            <ButtonLike product={product} />
            )
          : null}
        <ImgCol img={product.img} />
        <DetailsCol product={product} />
      </Row>
    </Container>
  )
}
