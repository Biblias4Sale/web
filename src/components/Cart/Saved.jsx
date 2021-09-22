import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../common/formatedPrice'
import styles from './Cart.module.css'

const Saved = ({ savedList, moveToCart, removeFromSaved, addQtyToSaved, subtractQtyFromSaved, newKey, disableInput }) => {
  return (

    <Container id={styles.body} className='justify-content-center'>
      {savedList.length > 0
        ? (
          <>
            {savedList.map(product => {
              const subtotal = product?.price * product?.qty
              return (
                <Row className='border border-secondary border-1 rounded p-2 mt-2 bg-white' key={{ newKey } + 100}>
                  <Col lg={2} className='d-flex justify-content-center align-items-center'>
                    <Link to={`/product/details/${product.id}`}>
                      <img src={product.img} alt='' style={{ maxWidth: '80px', maxHeight: '80px' }} />
                    </Link>
                  </Col>

                  <Col lg={4}>
                    <Row className='text-uppercase mt-2'>
                      <h5>{product.model}</h5>
                    </Row>
                    <Row>
                      <p> Marca: {product.brand}</p>
                    </Row>

                    <Row lg={12} >
                      <Col lg={4}><Link to='#' className='text-decoration-none' onClick={() => removeFromSaved(product.id)}>Eliminar</Link></Col>
                      <Col lg={6}><Link to='#' className='text-decoration-none' onClick={() => moveToCart(product)}>Agregar al carrito</Link></Col>
                    </Row>
                  </Col>

                  <Col lg={4} className='d-flex justify-content-center align-items-center'>
<Col >
                  {product.stock === 1
                      ? (
                        <h6 className='text-warning m-4'>
                          Último disponible!
                        </h6>
                        )
                      : null}

                    {product.stock > 1
                      ? (
                        <h6 className='text-success m-4' style={{ display: 'flex', flexDirection: 'row' }}>
                          {product.stock} disponibles
                        </h6>
                        )
                      : null}

                    {product.stock < 1
                      ? (
                        <h6 className='text-danger m-4'>
                          Sin stock
                        </h6>
                        )
                      : null}
                      </Col>
                    {product.stock > 0
                      ? (
                        !disableInput
                      ? (
                        <InputGroup style={{ width: '7.5vw' }} className='text-center'>
                          {product.qty > 1
                                  ? (
                                  <Button variant='outline-dark' disabled>
                            <span className='fw-bolder'>-</span>
                          </Button>
                                    )
                                    : (
                                      <Button
                                      variant='outline-dark'
                                      disabled
                                    >
                                      <span className='fw-bolder'>-</span>
                                    </Button>
                                    )}

                          <FormControl
                            className='fw-bolder text-center bg-white'
                            value={product.qty}
                            readOnly
                            disabled
                          />

{product.qty < product.stock
                                  ? (
                          <Button variant='outline-dark' disabled>
                            <span className='fw-bolder d-flex justify-content-center align-items-center'>+</span>
                          </Button>
 )
 : (
  <Button
  variant='outline-dark'
  disabled
>
  <span className='fw-bolder'>+</span>
</Button>
)}
                        </InputGroup>
                        )
                      : (
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
                        )
                      )
                      : null}
                  </Col>

                  <Col lg={2} className='d-flex justify-content-center align-items-center flex-column'>
                    <Row>
                      <span className='fw-bolder fs-5'>
                        {product && FormatedPrice({ price: subtotal })}
                      </span>
                      </Row>
                  </Col>
                </Row>
              )
            }
            )}

          </>
          )
        : (
          <Col className='d-flex  justify-content-center align-items-center'>
            <h4>No tenés productos guardados</h4>
          </Col>
          )}

    </Container>
  )
}

export default Saved
