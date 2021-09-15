import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FavoritesView = ({ favorite, moveToCart, RemovefromFavorites }) => {
  console.log('FAVORITE', favorite)
  return (
    <Container>
      {favorite.map(product => {
        return (
          <Row className='border border-dark p-1 mt-2' key={product.id}>
            <Col lg={2}>
              <img src={product.img} alt='' style={{ width: '5vw' }} />
            </Col>
            <Col lg={6}>
              <Row className='text-uppercase mt-2'>
                <h5>{product.model}</h5>
              </Row>
              <Row>
                <p> Marca: {product.brand}</p>
              </Row>

              <Row>
                <Col><Link to='#' onClick={() => RemovefromFavorites(product.id)}>Eliminar</Link></Col>
                <Col><Link to='#' onClick={() => moveToCart(product)}>Enviar al Carrito</Link></Col>
              </Row>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}
export default FavoritesView
