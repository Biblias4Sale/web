import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../../common/formatedPrice'

const FavoritesView = ({ favorite, moveToCart, RemovefromFavorites }) => {
  console.log('FAVORITE', favorite)
  return (
    <Container>
      {favorite.map(product => {
        return (
          <Row className='border border-secondary border-1 rounded p-2 mt-2 bg-white' key={product.id}>
            <Col lg={2} className='d-flex justify-content-center align-items-center'>
              <img src={product.img} alt='' style={{ maxWidth: '80px', maxHeight: '80px' }} />
            </Col>
            <Col lg={6}>
              <Row className='text-uppercase mt-2'>
                <h5>{product.model}</h5>
              </Row>
              <Row>
                <p> Marca: {product.brand}</p>
              </Row>

              <Row>
                <Col><Link to='#' className='text-decoration-none' onClick={() => RemovefromFavorites(product.id)}>Eliminar</Link></Col>
                <Col><Link to='#' className='text-decoration-none' onClick={() => moveToCart(product)}>Agregar al Carrito</Link></Col>
              </Row>
            </Col>
            <Col lg={1} className='d-flex justify-content-center align-items-center flex-column'>
              <Row><span className='fw-bolder fs-5'>{FormatedPrice({ price: product.price })}</span></Row>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}
export default FavoritesView
