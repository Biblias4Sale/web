import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../common/formatedPrice'
import styles from './Cart.module.css'

const Saved = ({ savedList, moveToCart, removeFromSaved, addQtyToSaved, subtractQtyFromSaved, newKey }) => {
  return (

    <Container id={styles.body} className='justify-content-center'>
      {savedList.length > 0
        ? (
          <>
            {savedList.map(product => {
              const subtotal = product?.price * product?.qty
              return (
                <Row className='border border-dark p-1 mt-2 bg-white' key={{ newKey } + 100}>
                  <Col lg={2}>
                    <Link to={`/product/details/${product.id}`}>
                      <img src={product.img} alt='' style={{ width: '5vw' }} />
                    </Link>
                  </Col>

                  <Col lg={6}>
                    <Row className='text-uppercase mt-2'>
                      <h5>{product.model}</h5>
                    </Row>
                    <Row>
                      <p> Marca: {product.brand}</p>
                    </Row>

                    <Row lg={7}>
                      <Col lg={3}><Link to='#' onClick={() => removeFromSaved(product.id)}>Eliminar</Link></Col>
                      <Col lg={4}><Link to='#' onClick={() => moveToCart(product)}>Agregar al carrito</Link></Col>
                    </Row>
                  </Col>

                  <Col lg={2} className='d-flex justify-content-center align-items-center'>
                    <InputGroup style={{ width: '7.5vw' }} className='text-center'>
                      <Button variant='outline-dark' onClick={() => subtractQtyFromSaved(product.id)}>
                        <span className='fw-bolder'>-</span>
                      </Button>

                      <FormControl
                        className='fw-bolder text-center bg-white'
                        value={product.qty}
                        readOnly
                      />

                      <Button variant='outline-dark' onClick={() => addQtyToSaved(product)}>
                        <span className='fw-bolder d-flex justify-content-center align-items-center'>+</span>
                      </Button>

                    </InputGroup>
                  </Col>

                  <Col lg={1} className='d-flex justify-content-center align-items-center flex-column'>
                    <Row><span className='fw-bolder fs-5'>{product && FormatedPrice({ price: subtotal })}</span></Row>
                  </Col>
                </Row>
              )
            }
            )}

          </>
          )
        : (
          <h4>No tenes productos guardados</h4>
          )}

    </Container>
  )
}

export default Saved
