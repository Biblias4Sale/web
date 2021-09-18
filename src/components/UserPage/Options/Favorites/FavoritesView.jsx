import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../../common/formatedPrice'
import { Paginate } from '../../../common/paginate'
import { title } from './FavoritesStyle'

const FavoritesView = ({
  favorites,
  moveToCart,
  RemovefromFavorites
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const lastObj = currentPage * productsPerPage
  const firstObj = lastObj - productsPerPage
  const myfavorites = favorites.slice(firstObj, lastObj)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <h3 style={title}>Favoritos</h3>
      <div style={{ height: '75vh' }}>
        {myfavorites.map(product => {
          return (
            <Row className='border border-secondary border-1 rounded p-2 mt-2 bg-white' key={product.id}>
              <Col lg={2} className='d-flex justify-content-center align-items-center'>
                <img src={product.img} alt='' style={{ maxWidth: '80px', maxHeight: '80px' }} />
              </Col>
              <Col lg={7}>
                <Row className='text-uppercase mt-2'>
                  <h5>{product.model}</h5>
                </Row>
                <Row>
                  <p> Marca: {product.brand}</p>
                </Row>
                <Row>
                  <Col><Link to='#' className='text-decoration-none' onClick={() => RemovefromFavorites(product.id)}>Eliminar</Link></Col>
                  <Col><Link to='#' className='text-decoration-none' onClick={() => moveToCart(product.id)}>Agregar al Carrito</Link></Col>
                </Row>
              </Col>
              <Col lg={3} className='d-flex justify-content-center align-items-center flex-column'>
                <Row><span className='fw-bolder fs-5'>{FormatedPrice({ price: product.price })}</span></Row>
              </Col>
            </Row>
          )
        })}
      </div>
      <div className='d-flex justify-content-end m-3' style={{ positon: 'relative', bottom: 0 }}>
        <Paginate
          objPerPage={productsPerPage}
          allObj={favorites.length}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          firstObj={firstObj}
          lastObj={lastObj}
        />
      </div>
    </Container>
  )
}
export default FavoritesView
