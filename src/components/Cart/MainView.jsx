import {
  Container,
  Col,
  Row,
  InputGroup,
  Button,
  FormControl
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../common/formatedPrice'
import styles from './Cart.module.css'
import emptyCart from '../../assets/carritoVacio.png'

const MainView = ({
  mainList,
  shop,
  removeFromCart,
  newKey,
  setShowSession,
  showSession,
  setCurrentView,
  currentView,
  logged,
  showMP,
  setShowMP,
  moveToSaved,
  subtractQtyFromCart,
  addQtyToCart,
  total,
  disableInput
}) => {
  return (

    <Container id={styles.body} className='justify-content-center'>
      {mainList.length > 0
        ? (
          <>
            {mainList.map((product, index) => {
              const subtotal = product.price * product?.qty

              return (
                <Row
                  className='border border-secondary border-1 rounded p-2 mt-2 bg-white'
                  key={{ newKey } + product.id}
                >
                  <Col
                    lg={2} sm={5}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <Link to={`/product/details/${product.id}`}>
                      <img
                        src={product.img}
                        alt=''
                        style={{ maxWidth: '25vw', maxHeight: '15vh' }}
                      />
                    </Link>
                  </Col>

                  <Col lg={4} sm={12}>
                    <Row className='text-uppercase mt-2'>
                      <h5>{product.model}</h5>
                    </Row>
                    <Row>
                      <p> Marca: {product.brand}</p>
                    </Row>

                    <Row>
                      <Col lg={4} sm={6}>
                        <Link
                          to='#'
                          className='text-decoration-none'
                          onClick={() => removeFromCart(product.id)}
                        >
                          Eliminar
                        </Link>
                      </Col>
                      <Col lg={6} sm={6}>
                        <Link
                          to='#'
                          className='text-decoration-none'
                          onClick={() => moveToSaved(product)}
                        >
                          Guardar para después
                        </Link>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    lg={4}
                    className='d-flex justify-content-center align-items-center'
                    >
                 <Col
                    className='d-flex justify-content-center align-items-center'
                    >
                    {product.stock === 1
                      ? (
                        <h5 className='text-warning m-4'>
                          Último disponible!
                        </h5>
                        )
                      : null}

                    {product.stock > 1
                      ? (
                        <div>
                        <h5 className='text-success m-4' style={{ display: 'flex', flexDirection: 'row' }}>
                          {product.stock} disponibles
                        </h5>
                      </div>
                        )
                      : null}

                    {product.stock < 1
                      ? (
                        <h5 className='text-danger m-4'>
                          Sin stock
                        </h5>
                        )
                      : null}
                      </Col>
                    {product.stock > 0
                      ? (
                        !disableInput
                            ? (
                              <div>
                              <Col className='d-flex justify-content-center'>
                              <InputGroup
                                style={{ width: '7.5vw' }}
                                className='text-center'
                              >
                                <Button
                                  variant='outline-dark'
                                  onClick={() => subtractQtyFromCart(product.id)}
                                >
                                  <span className='fw-bolder'>-</span>
                                </Button>

                                <FormControl
                                  className='fw-bolder text-center bg-white'
                                  name='qty'
                                  value={product.qty}
                                  readOnly
                                />
                                {product.qty < product.stock
                                  ? (
                                    <Button
                                      variant='outline-dark'
                                      onClick={() => addQtyToCart(product)}
                                    >
                                      <span className='fw-bolder'>+</span>
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
                                </Col>
                                </div>
                              )
                              : (
                                <div>
                                <Col>
                                <InputGroup
                                style={{ width: '7.5vw' }}
                                className='text-center'
                                >
                                <Button
                                  variant='outline-dark'
                                  disabled
                                  >
                                  <span className='fw-bolder'>-</span>
                                </Button>

                                <FormControl
                                  className='fw-bolder text-center bg-white'
                                  name='qty'
                                  value={product.qty}
                                  readOnly
                                  disabled
                                  />

                                <Button
                                  variant='outline-dark'
                                  disabled
                                  >
                                  <span className='fw-bolder'>+</span>
                                </Button>
                              </InputGroup>
                              </Col>
                                    </div>
                              )
                              )
                              : null}

                  </Col>

                  <Col
                    lg={2}
                    className='d-flex justify-content-center align-items-center flex-column'
                  >
                    <Row>
                      <span className='fw-bolder fs-5'>
                        {FormatedPrice({ price: subtotal })}
                      </span>
                    </Row>
                  </Col>
                </Row>
              )
            })}
            <Row className='fw-bolder fs-4 d-flex justify-content-end align-items-center p-5'>
              Total: {total && FormatedPrice({ price: total })}
            </Row>

            {mainList.length === 1
              ? (
                <Row
                  lg={5}
                  className='d-flex justify-content-center align-items-center flex-column'
                >
                  <Button variant='outline-dark' onClick={shop}>
                    <span className='fw-bolder'>Comprar 1 producto</span>
                  </Button>
                </Row>
                )
              : (
                <Row
                  lg={5}
                  className='d-flex justify-content-center align-items-center flex-column'
                >
                  <Button variant='outline-dark' onClick={shop}>
                    <span className='fw-bolder'>{`Comprar ${mainList.length} productos`}</span>
                  </Button>
                </Row>
                )}
          </>
          )
        : (
          <Col className='d-flex  justify-content-center align-items-center'>
            <h4>Tu carrito está vacío</h4>
            <img src={emptyCart} className='w-25' alt='' />
          </Col>
          )}
    </Container>

  )
}

export default MainView
