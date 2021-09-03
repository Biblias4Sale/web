import { Row, Col } from 'react-bootstrap'
import { BestProducts } from './bestProducts'
import { Cards } from './cards'

export const ProductsBox = () => {
  return (
    <Row>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {BestProducts().map(product =>
          <Col key={product.id} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <Cards product={product} />
          </Col>
        )}
      </div>
    </Row>
  )
}
