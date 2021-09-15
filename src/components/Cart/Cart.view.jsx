import { Container, Col, Row, InputGroup, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormatedPrice } from '../../components/common/formatedPrice'
import styles from './Cart.module.css'

export const CartView = ({ cart, total, addQty, RemoveProduct, subtractQty, addSaved }) => {
  return (
    <>
      <div id={styles.banner} />

      <div id={styles.mainContainer}>

        <div id={styles.header}>
          <ul>
            <li className={styles.headerItem}> {`Carrito (${cart.length})`}</li>
            <li className={styles.headerItem}> Guardados </li>
          </ul>
        </div>

        <Container id={styles.body} className='justify-content-center'>
          {cart.map(product => (
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
                  <Col><Link to='#' onClick={() => RemoveProduct(product.id)}>Eliminar</Link></Col>
                  <Col><Link to='#' onClick={() => addSaved(product)}>Guardar para después</Link></Col>
                </Row>

              </Col>

              <Col lg={2} className='d-flex justify-content-center align-items-center'>
                <InputGroup style={{ width: '7.5vw' }} className='text-center'>
                  <Button variant='outline-dark' onClick={() => subtractQty(product.id)}>
                    <span className='fw-bolder'>-</span>
                  </Button>
                  <FormControl
                    className='fw-bolder'
                    value={product.qty}
                  />
                  <Button variant='outline-dark' onClick={() => addQty(product)}>
                    <span className='fw-bolder d-flex justify-content-center align-items-center'>+</span>
                  </Button>
                </InputGroup>
              </Col>

              <Col lg={2} className='d-flex justify-content-center align-items-center'>
                <span className='fw-bolder fs-5'>{product && FormatedPrice(product)}</span>
              </Col>
            </Row>
          )
          )}
          <Row>
            <span className='fw-bolder fs-4 d-flex justify-content-end align-items-center m-3'>
              Total: {total && FormatedPrice({ price: total })}
            </span>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default CartView
