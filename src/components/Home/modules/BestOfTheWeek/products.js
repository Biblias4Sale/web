import { Row, Col } from 'react-bootstrap'
import { BestProducts } from './bestProducts'
import { Cards } from './cards'
import { StyleContainer, ContainerBests } from '../../HomeStyle'

export const ProductsBox = () => {
  return (
    <Row>
      <div style={ContainerBests}>
        {BestProducts().map(product =>
          <Col key={product.id} xs={12} lg={4} style={StyleContainer}>
            <Cards product={product} />
          </Col>
        )}
      </div>
    </Row>
  )
}
