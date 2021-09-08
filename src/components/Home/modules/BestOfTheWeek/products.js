import { Row, Col } from 'react-bootstrap'
import { BestProducts } from './bestProducts'
import { ProductCards } from '../../../common/productCard'

export const ProductsBox = () => {
  return (
    <Row>
      <div className='d-flex flex-wrap'>
        {BestProducts().map(product =>
          <Col key={product.id} xs={12} lg={4} className='d-flex justify-content-center'>
            <ProductCards product={product} height='45%' imgWidth='85%' />
          </Col>
        )}
      </div>
    </Row>
  )
}
