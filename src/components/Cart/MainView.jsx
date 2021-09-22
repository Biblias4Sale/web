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
  disableInput,
  mpCart
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
                    lg={2}
                    className='d-flex justify-content-center align-items-center'
                  >
                    <Link to={`/product/details/${product.id}`}>
                      <img
                        src={product.img[0]}
                        alt=''
                        style={{ maxWidth: '80px', maxHeight: '80px' }}
                      />
                    </Link>
                  </Col>

                  <Col lg={4}>
                    <Row className='text-uppercase mt-2'>
                      <h5>{product.model}</h5>
                    </Row>
                    <Row>
                      <p> Marca: {product.brand}</p>
                    </Row>

                    <Row>
                      <Col lg={4}>
                        <Link
                          to='#'
                          className='text-decoration-none'
                          onClick={() => removeFromCart(product.id)}
                        >
                          Eliminar
                        </Link>
                      </Col>
                      <Col lg={6}>
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
                    className='d-flex justify-content-center align-items-center align-content-end'
                  >
                    <Col>
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
                              <InputGroup
                                style={{ width: '7.5vw' }}
                                className='text-center'
                              >
                                {product.qty > 1
                                  ? (
                                    <Button
                                      variant='outline-dark'
                                      onClick={() => subtractQtyFromCart(product.id)}
                                    >
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
                              )
                            : (
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
                        {product.stock > 0 ? FormatedPrice({ price: subtotal }) : null}
                      </span>
                    </Row>
                  </Col>
                </Row>
              )
            })}
            {total > 0
              ? (
                <Row className='fw-bolder fs-4 d-flex justify-content-end align-items-center p-5'>
                  Total: {total && FormatedPrice({ price: total })}
                </Row>
                )
              : null}

            {mpCart.length === 1
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
              : null}
            {mpCart.length > 1
              ? (
                <Row
                  lg={5}
                  className='d-flex justify-content-center align-items-center flex-column'
                >
                  <Button variant='outline-dark' onClick={shop}>
                    <span className='fw-bolder'>{`Comprar ${mpCart.length} productos`}</span>
                  </Button>
                </Row>
                )
              : null}

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
